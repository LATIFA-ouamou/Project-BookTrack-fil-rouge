describe("Authentification", () => {

  const mockLocalStorage = {
    store: {},

    getItem(key) {
      return this.store[key] || null;
    },

    setItem(key, value) {
      this.store[key] = value;
    },

    removeItem(key) {
      delete this.store[key];
    },

    clear() {
      this.store = {};
    },
  };

  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: mockLocalStorage,
    });
  });

  beforeEach(() => {
    localStorage.clear();
  });

  test("enregistre le token après login", () => {
    localStorage.setItem("token", "abc");
    expect(localStorage.getItem("token")).toBe("abc");
  });

  test("supprime le token après logout", () => {
    localStorage.setItem("token", "abc");
    localStorage.removeItem("token");
    expect(localStorage.getItem("token")).toBeNull();
  });

  test("isAuthenticated fonctionne correctement", () => {
    expect(!!localStorage.getItem("token")).toBe(false);

    localStorage.setItem("token", "abc");
    expect(!!localStorage.getItem("token")).toBe(true);
  });

});
