module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended', // Nó chứa một tập hợp các quy tắc được đề xuất (recommended) để kiểm tra mã nguồn trong dự án sử dụng Jest. Những quy tắc này giúp đảm bảo rằng bạn đang tuân thủ các quy ước và các thực hành tốt khi viết kiểm thử với Jest.
    'plugin:jest/style', //Đây là một cấu hình của plugin Jest nhằm kiểm tra về phong cách viết code khi sử dụng Jest. Nó có thể bao gồm các quy tắc liên quan đến cách viết mô tả (describe), cách sử dụng các hàm kiểm thử, v.v.
    'plugin:testing-library/react', //Đây là một cấu hình của plugin Testing Library cho React. Testing Library cung cấp một phong cách kiểm thử tập trung vào việc thử nghiệm từ góc độ người dùng (user-centric testing) và 'plugin:testing-library/react' sẽ kiểm tra mã nguồn trong dự án React để đảm bảo tuân thủ các quy ước Testing Library.
    'next',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
