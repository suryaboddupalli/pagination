"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationSerive = void 0;
const PAGE = 1;
const LIMIT = 10;
class PaginationSerive {
    paginate(query) {
        const page = query.page !== undefined ? query.page : PAGE;
        const limit = query.limit !== undefined ? Number(query.limit) : LIMIT;
        const filter = query.filter !== undefined ? query.filter : {};
        const offset = (page - PAGE) * limit;
        const order = query.order !== undefined ? Object.entries(query.order) : [];
        const group = query.group !== undefined ? Object.entries(query.group) : [];
        const data = { page, limit, offset, filter, group, order };
        return data;
    }
}
exports.PaginationSerive = PaginationSerive;
