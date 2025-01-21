import axios from "axios";

export const parseData = async (file: File) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/upload`,
      { file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return "Success";
  } catch (error: any) {
    return Promise.reject(error.response?.data);
  }
};

export const getFilteredData = async (
  id?: number,
  username?: string,
  password?: string,
  url?: string,
  domain?: string,
  app?: string,
  ipAddress?: string,
  tags?: string[],
  status?: number,
  title?: string,
  port?: number,
  urlPath?: string,
  protocol?: string,
  routableOnly?: boolean
) => {
  try {
    const queryParams = new URLSearchParams({
      ...(id && { id: id.toString() }),
      ...(username && { username }),
      ...(password && { password }),
      ...(url && { url }),
      ...(domain && { domain }),
      ...(app && { app }),
      ...(ipAddress && { ipAddress }),
      ...(tags?.length && { tags: tags.join(",") }),
      ...(status && { status: status.toString() }),
      ...(title && { title }),
      ...(port && { port: port.toString() }),
      ...(urlPath && { urlPath }),
      ...(protocol && { protocol }),
      ...(routableOnly && { routableOnly: routableOnly.toString() }),
    }).toString();
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/breaches?${queryParams}`
    );
    console.log(response.data);
    return response;
  } catch (error: any) {
    return Promise.reject(error.response?.data);
  }
};
