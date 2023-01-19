const PAGE = 1;
const LIMIT = 10;

interface Pagination {
	page: number;
	limit: number;
	offset?: number;
	order?: any;
	filter?: any;
	group?: any;
}

export class PaginationSerive {
	public paginate(query: Pagination) {
		const page: number = query.page !== undefined ? query.page : PAGE;
		const limit: number =
			query.limit !== undefined ? Number(query.limit) : LIMIT;
		const filter: { [key: string]: string } =
			query.filter !== undefined ? query.filter : {};
		const offset: number = (page - PAGE) * limit;
		const order = query.order !== undefined ? Object.entries(query.order) : [];
		const group = query.group !== undefined ? Object.entries(query.group) : [];
		const data: Pagination = { page, limit, offset, filter, group, order };
		return data;
	}
}
