# secure-gate-system-skom
secure-gate-system-skom created by GitHub Classroom

API:

Gates
- get /gates ->halaman gate
- get /gates/:id -> mendapatkan id gate
- delete gates/delete/:id -> delete date
- post /gates/add -> tambah gate

Index
- get /gatesystem ->halaman awal
- get /login ->halaman login
- post /login/auth -> melakukan login
- get /register -> halaman register
- get /register/add -> tambah register

User
- get /users -> halaman user
- get /user/:id -> mendapatkan id user
- delete /user/delete/:id ->delete user
- post /user/add ->tambah user

Rules of the secure gate
- Masing-masing gate punya 'role'; Mahasiswa atau Dosen
- User dengan role Dosen bisa masuk ke gate dengan role Dosen maupun Mahasiswa
- User dengan role Mahasiswa hanya bisa masuk ke gate dengan role Mahasiswa
- Masing-masing gate punya 'open' dan 'close', menandakan jam buka dan tutup gate
- User hanya bisa mengakses gate jika dalam rentang waktu open dan close tersebut

