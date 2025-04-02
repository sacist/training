class PaginationHelper {
    constructor(private collection: any[], private itemsPerPage: number) {}

    itemCount(): number {
        return this.collection.length;
    }

    pageCount(): number {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex: number): number {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }
        if (pageIndex === this.pageCount() - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        } else {
            return this.itemsPerPage;
        }
    }

    pageIndex(itemIndex: number): number {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}