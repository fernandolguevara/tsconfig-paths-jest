const fromPairs = pairs =>
  pairs.reduce((res, [key, value]) => ({ ...res, [key]: value }), {});

/**
 * tsconfig の paths の設定から moduleNameMapper を生成する
 * {"@app/*": ["src/*"]} -> {"@app/(.*)": "<rootDir>/src/$1"}
 */
module.exports = function moduleNameMapperFromTSPaths({
  compilerOptions: { baseUrl, paths },
}) {
  baseUrl = baseUrl ? `${baseUrl}/` : '';
  
  return fromPairs(
    Object.entries(paths).map(([k, [v]]) => [
      `^${k.replace(/\*/, '(.*)')}`,
      `<rootDir>/${baseUrl}${v.replace(/\*/, '$1')}`,
    ]),
  );
};
