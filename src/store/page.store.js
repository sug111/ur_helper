import { writable } from "svelte-local-storage-store";

const pageDefault = {
    currentPage: "",
    maxCurrentPage: null,
    pageNum: 0
};

export const page = writable("ur_helper_storage", pageDefault);
