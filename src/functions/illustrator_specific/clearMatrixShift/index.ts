const clearMatrixShift = (m: Matrix): Matrix => {
  const deltaX = m.mValueTX;
  const deltaY = m.mValueTX;

  return app.concatenateTranslationMatrix(m, -deltaX, -deltaY);
};

export default clearMatrixShift;
