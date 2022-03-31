import { writable } from "svelte/store";

const pageDefault = {
    currentPage: "",
    maxCurrentPage: null,
    pageNum: 0
};

export const page = writable(pageDefault);
