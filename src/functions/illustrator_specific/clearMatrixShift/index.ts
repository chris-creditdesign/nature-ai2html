import { type ExtendedMatrix } from "src/types/global";

const clearMatrixShift = (m: ExtendedMatrix): Matrix => {
  const deltaX = m.mValueTX;
  const deltaY = m.mValueTX;

  return app.concatenateTranslationMatrix(m, -deltaX, -deltaY);
};

export default clearMatrixShift;
