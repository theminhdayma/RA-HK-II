const saveLocal = (key: string, value: any[]) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export default saveLocal