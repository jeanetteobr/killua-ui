export const useWhiteTextAlways = (name: string): boolean => {
    const whiteTextSet = new Set([
      "primary",
      "link",
      "success",
      "warning",
      "danger",
      "info",
      // also support light theme overrides
      "light.primary",
      "light.link",
      "light.success",
      "light.warning",
      "light.danger",
      "light.info",
    ]);
  
    return whiteTextSet.has(name);
  };
  