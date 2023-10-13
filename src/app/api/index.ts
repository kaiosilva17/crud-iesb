import type { Entry } from "../types"

const URL = 'http://localhost:3001/contatos';


export default {
    async createContato(body: Entry) {
      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  
    async getContatos() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  
    async getContato(id: string) {
      try {
        const response = await fetch(`${URL}/${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  
    async atualizarContato(id: string, body: Entry) {
      try {
        const response = await fetch(`${URL}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  
    async deletarContato(id: string) {
      try {
        const response = await fetch(`${URL}/${id}`, {
          method: 'DELETE',
        });
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  };