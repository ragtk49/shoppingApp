import axios from "axios";

const BASE_URL = "http://localhost:3001/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmE5NTc5OGY4Y2NhZjY5MmZhZjUyNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTk1NzkwMSwiZXhwIjoxNjkwMjE3MTAxfQ.9X4kZ_lWbXeo7n92CugWDnXbCdWHjqTEYkxlln2eBvg"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
})