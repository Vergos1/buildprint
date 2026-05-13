export class ApiError extends Error {
	public readonly statusCode: number;
	public readonly isOperational: boolean;

	constructor(statusCode: number, message: string, isOperational = true) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		Error.captureStackTrace(this, this.constructor);
	}
}

export const handleApiError = (error: unknown) => {
	if (error instanceof ApiError) {
		return {
			status: error.statusCode,
			message: error.message,
			isOperational: error.isOperational,
		};
	}

	// Handle unknown errors
	console.error("Unexpected error:", error);
	return {
		status: 500,
		message: "Internal server error",
		isOperational: false,
	};
};

export const createApiError = (statusCode: number, message: string) => {
	return new ApiError(statusCode, message);
};

// Common API errors
export const API_ERRORS = {
	NOT_FOUND: (resource = "Resource") => createApiError(404, `${resource} not found`),
	UNAUTHORIZED: () => createApiError(401, "Authentication required"),
	FORBIDDEN: () => createApiError(403, "Access denied"),
	BAD_REQUEST: (message = "Invalid request") => createApiError(400, message),
	INTERNAL: (message = "Internal server error") => createApiError(500, message),
};
