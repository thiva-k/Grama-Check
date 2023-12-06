import axios from "axios";

export interface ApiResponse {
  data?: any;
}

const API_BASE_URL =
  "https://7902e7c7-f73b-401f-a1db-07c524deb30a-dev.e1-us-east-azure.choreoapis.dev/rkjj/id-check/endpoint-9090-803/v1.0"; // Replace with your API base URL

export const submitFormData = async (id: string): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${API_BASE_URL}`, {
      id,
    });
    return response.data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
