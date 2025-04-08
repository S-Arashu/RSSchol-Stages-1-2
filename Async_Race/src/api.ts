import {
  Car,
  EngineData,
  PaginatedResponse,
  SortOrder,
  Winner,
  WinnerWithCar,
} from "./types.ts";

const BASE_URL = "/api";

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}

// Car API endpoints
export async function fetchCars(
  page: number = 1,
  limit: number = 7
): Promise<PaginatedResponse<Car>> {
  console.log(`Fetching cars for page ${page} with limit ${limit}`);
  const response = await fetch(
    `${BASE_URL}/garage?page=${page}&limit=${limit}`
  );
  return handleResponse<PaginatedResponse<Car>>(response);
}

export async function fetchCar(id: number): Promise<Car> {
  const response = await fetch(`${BASE_URL}/garage/${id}`);
  return handleResponse<Car>(response);
}

export async function createCar(car: {
  name: string;
  color: string;
}): Promise<Car> {
  const response = await fetch(`${BASE_URL}/garage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  return handleResponse<Car>(response);
}

export async function updateCar(
  id: number,
  car: { name: string; color: string }
): Promise<Car> {
  const response = await fetch(`${BASE_URL}/garage/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  return handleResponse<Car>(response);
}

export async function deleteCar(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/garage/${id}`, {
    method: "DELETE",
  });
  return handleResponse<void>(response);
}

export async function generateRandomCars(count: number = 100): Promise<void> {
  const response = await fetch(`${BASE_URL}/garage/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ count }),
  });
  return handleResponse<void>(response);
}

// Engine API endpoints
export async function startEngine(id: number): Promise<EngineData> {
  const response = await fetch(`${BASE_URL}/engine`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, status: "started" }),
  });
  return handleResponse<EngineData>(response);
}

export async function driveEngine(id: number): Promise<{ success: boolean }> {
  try {
    const response = await fetch(`${BASE_URL}/engine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: "drive" }),
    });

    // Handle 500 error specifically for engine broke down scenario
    if (response.status === 500) {
      return { success: false };
    }

    return handleResponse<{ success: boolean }>(response);
  } catch (error) {
    console.error("Drive engine error:", error);
    return { success: false };
  }
}

export async function stopEngine(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/engine`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, status: "stopped" }),
  });
  return handleResponse<void>(response);
}

// Winners API endpoints
export async function fetchWinners(
  page: number = 1,
  limit: number = 10,
  sort: string = "id",
  order: SortOrder = "ASC"
): Promise<PaginatedResponse<WinnerWithCar>> {
  console.log(
    `Fetching winners for page ${page} with limit ${limit}, sort=${sort}, order=${order}`
  );
  const response = await fetch(
    `${BASE_URL}/winners?page=${page}&limit=${limit}&sort=${sort}&order=${order}`
  );
  return handleResponse<PaginatedResponse<WinnerWithCar>>(response);
}

export async function fetchWinner(id: number): Promise<Winner> {
  const response = await fetch(`${BASE_URL}/winners/${id}`);
  return handleResponse<Winner>(response);
}

export async function createWinner(
  carId: number,
  time: number
): Promise<Winner> {
  // First check if the winner already exists
  try {
    const existingWinner = await fetchWinnerByCarId(carId);

    if (existingWinner) {
      // Update existing winner
      return updateWinner(existingWinner.id, {
        wins: existingWinner.wins + 1,
        bestTime: Math.min(existingWinner.bestTime, time),
      });
    }
  } catch (error) {
    // If winner doesn't exist, continue to create
    console.log("No existing winner found, creating new one");
  }

  // Create new winner
  const response = await fetch(`${BASE_URL}/winners`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ carId, time }),
  });
  return handleResponse<Winner>(response);
}

export async function updateWinner(
  id: number,
  data: { wins?: number; bestTime?: number }
): Promise<Winner> {
  const response = await fetch(`${BASE_URL}/winners/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse<Winner>(response);
}

export async function deleteWinner(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/winners/${id}`, {
    method: "DELETE",
  });
  return handleResponse<void>(response);
}

export async function fetchWinnerByCarId(
  carId: number
): Promise<Winner | null> {
  const response = await fetch(`${BASE_URL}/winners?carId=${carId}`);
  const winners = await handleResponse<Winner[]>(response);
  console.log(`Found ${winners.length} winners for carId ${carId}:`, winners);
  return winners.length > 0 ? winners[0] : null;
}
