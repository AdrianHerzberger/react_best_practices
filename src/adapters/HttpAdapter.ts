export class HttpAdapter {
    private readonly baseUrl: string;

    constructor({baseUrl}: {baseUrl: string}) {
        this.baseUrl = baseUrl;
    }

    async get<T>(url: string): Promise<T> {
        return fetch(this.baseUrl + url)
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

    async put<T>(url: string, data: T): Promise<any> {
        return fetch(this.baseUrl + url, {
            method: "PUT",
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