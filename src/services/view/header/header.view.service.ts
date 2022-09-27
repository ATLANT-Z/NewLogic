import {reactive} from "vue";

class HeaderViewService {
    headerHeight: number = 104;
}

export const headerViewService = reactive(new HeaderViewService());
