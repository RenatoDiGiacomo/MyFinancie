import axios from 'axios';
export interface IDataBase {
	id: number;
	title: string;
	description?: string;
	products: Array<IProductsInterface>;
}
interface IProductsInterface {
	id: number;
	name: string;
	price: number;
	description: string;
}

export class AppService {
	urlBase = 'http://localhost:3001/lists';
	public async getData(): Promise<any> {
		const response = await axios.get(this.urlBase);
		return await response.data;
	}
}
