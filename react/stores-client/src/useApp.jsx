export function useApp() {
  let name = "";

  function handleNewName(newName) {
    name = newName;

    return name;
  }

  function sum(a, b) {
    return a + b;
  }

  return { sum, handleNewName, name };
}
