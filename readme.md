# Submission dicoding kelas Belajar Membuat Aplikasi Back-End untuk Pemula

Repository ini berisi proyek bookshelf API yang dibangun dengan menggunakan
beberapa teknologi berikut :
- [NodeJS]
- [Hapi Framework]

Perlu diketahui bahwa :
`Aplikasi ini berupa dummy API yang belum mengintegrasikan database didalamnya`

## List Endpoint yang ada
#### Add new items
```http
  POST /books
```
#### Get all items
```http
  GET /books
```
#### Get items by id
```http
  GET /books/{bookId}
```
#### Update items by id
```http
  PUT /books/{bookId}
```
#### Delete items by id
```http
  DELETE /books/{bookId}
```

## Installation Guide
- Unduh repository ini dengan perintah
```
git clone https://github.com/triyasniko/bookshelf-api-submission-backend-pemula.git
```
- install dengan mengetikkan perintah berikut
```
npm i
```
- jalankan dengan mengetikkan command
```
npm start
```