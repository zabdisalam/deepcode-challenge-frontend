import axios from 'axios'

export const parseData = async(file: File) => {
    try {
    await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        {file},
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
     return "Success"
    } catch (error: any){
        return Promise.reject(error.response?.data);
    }
}