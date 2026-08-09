  const palette = [
    "#14b8a6",
    "#3b82f6",
    "#8b5cf6",
    "#EC4899",
    "#f59e0b",
    "#81d7de",
    "#d491d0",
  ];

  export function getCategoryColor(category) {
    let hash = 0;
    for (let i = 0; i < category.length; i++) {
      hash = categories .charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % palette.length;
    return palette[index];
  }