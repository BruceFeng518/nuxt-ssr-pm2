import ajax from "./axios";
const api = {
  banner: id => {
    return ajax.post("/api/banner/index", id);
  },
  download: type => {
    return ajax.post("/api/download/index", type);
  },
  //分类列表
  rules: {
    list: param => {
      return ajax.post("/api/rules/index", param);
    }
  },
  category: {
    index: param => {
      return ajax.post("/api/categery/index", param);
    },
    list: id => {
      return ajax.post("category/list", id);
    },
    treeList: () => {
      return ajax.post("category/treeList");
    },
    parentList: id => {
      return ajax.post("category/parentList", id);
    }
  },
  school: {
    category: id => {
      return ajax.post("/api/school/category", id);
    },
    list: param => {
      return ajax.post("/api/school/index", param);
    },
    recommend: param => {
      return ajax.post("/api/school/recommend", param);
    },
    apply: param => {
      return ajax.post("/api/school_apply/apply", param);
    },
    sort: () => {
      return ajax.post("/api/school_rank/index");
    },
    info: id => {
      return ajax.post("/api/school/info", id);
    }
  },
  service: {
    list: param => {
      return ajax.post("/api/service/list", param);
    },
    info: id => {
      return ajax.post("solve/detail", id);
    }
  },
  assessment: {
    insert: param => {
      return ajax.post("/api/assessment/insert", param);
    },
    study_insert: param => {
      return ajax.post("/api/assess_study/insert", param);
    },
    info: id => {
      return ajax.post("solve/detail", id);
    }
  },
  visa: {
    list: () => {
      return ajax.post("/api/visa/index");
    },
    info: id => {
      return ajax.post("/api/visa/info", id);
    }
  },
  article: {
    list: id => {
      return ajax.post("/api/article/index", id);
    },
    all: param => {
      return ajax.post("/api/news/all", param);
    },
    index: param => {
      return ajax.post("/api/news/index", param);
    },
    immigrate: param => {
      return ajax.post("/api/news/immigrate", param);
    },
    category: param => {
      return ajax.post("/api/news/category", param);
    },
    success: param => {
      return ajax.post("/api/news/anli", param);
    },
    info: id => {
      return ajax.post("/api/news/info", id);
    }
  },
  system: {
    getinfo: (id) => {
      return ajax.post("/api/system/getinfo", id);
    },
    list: (id) => {
      return ajax.post("/api/address/index", id);
    },
    visiter: () => {
      return ajax.post("/api/visiter/insert");
    }
  },
  work: {
    index: param => {
      return ajax.post("/api/work/index", param);
    },
    save: param => {
      return ajax.post("/api/work_resume/save", param);
    }
  },
  score: {
    insert: param => {
      return ajax.post("/api/bcpnp/insert", param);
    },
    ee: param => {
      return ajax.post("/api/ee/insert", param);
    }
  },
  message: {
    insert: param => {
      return ajax.post("/api/message/insert", param);
    }
  }
};

export default api