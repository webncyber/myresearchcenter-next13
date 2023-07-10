
const IS_SERVER = typeof window === "undefined";
export default function getHostName() {
  const baseURL = IS_SERVER
    ? process.env.Host_Name!
    : window.location.origin;
  return new URL(baseURL).toString();
}