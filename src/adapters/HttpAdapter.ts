export class HttpAdapter {
    private readonly baseUrl: string;

    constructor({baseUrl}: {baseUrl: string}) {
        this.baseUrl = baseUrl;
    }

    async get<T>(url: string, params:{query: object} = {query: {}}): Promise<T> {
        const query = Object.keys(params?.query || [])
            .map(
                (key) => `${key}=${Object.getOwnPropertyDescriptor(params.query, key)?.value}`
            ).join("&");

        return fetch(this.baseUrl + url + "?"+query)
            .then(response => response.json())
    }

    async post<T>(url: string, data: T): Promise<any> {
        return fetch(this.baseUrl + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            response.json();
        });
    }

    async patch<T>(url: string, data: T): Promise<any> {
        return fetch(this.baseUrl + url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            response.json();
        });
    }

    async delete<T>(url: string, data: T): Promise<any> {
        return fetch(this.baseUrl + url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            response.json();
        });
    }   
}