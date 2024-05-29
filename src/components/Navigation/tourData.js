import kompas from "../../assets/image/kompas.png"
import control from "../../assets/image/control.png"


// Tour configuration
const tour = [
    {
      element: '#petunjuk',
      title: 'Petunjuk',
      description: 'Fitur ini dapat membantu para pengguna dalam memahami atau menggunakan aplikasi virtual tour ini. Fitur petunjuk ini bertujuan untuk meningkatkan pengalaman pengguna, mengurangi hambatan pemakaian, dan memastikan bahwa pengguna dapat memanfaatkan produk atau layanan dengan maksimal',

  },
    
    {
        element: '#pilih-tempat',
      title: 'Pilih Tempat',
      description: 'Fitur pilih tempat ini membantu pengguna dalam mencari lokasi yang dituju berdasarkan teks',
    },
    {
      element: '#denah-sekolah',
      title: 'Denah Sekolah',
      description: 'Denah sekolah adalah representasi visual dari tata letak fisik dan ruang pada area sekolah. Pada fitur ini akan ditampilkan denah sekolah dan beberapa titik di area tertentu yang akan membawa pengguna menuju ke tempat yang dituju',
    },
    {
        element: '#panorama-button',
      title: 'Panorama',
      description: 'Fitur ini membantu pengguna dalam mencari lokasi yang dituju berdasarkan gambar',
    },
    {
      element: '#controls',
      title: 'Menu Kontrol',
      description: 'Menu kontrol adalah antarmuka atau set tombol dan opsi yang memberikan pengguna kemampuan untuk mengontrol dan menyesuaikan berbagai aspek tampilan atau fungsi pada aplikasi. Menu ini mencakup beberapa kontrol seperti berikut. <br> <img src="' + process.env.PUBLIC_URL + control + '" alt="Controls Image">  <br> 1. Pan Right (Geser Kanan): Mengizinkan pengguna untuk menggeser tampilan atau konten ke kanan, membuka akses ke area di sebelah kanan gambar atau layar.<br> 2. Pan Left (Geser Kiri): Kontrol ini memungkinkan pengguna untuk menggeser tampilan atau konten ke kiri, memungkinkan mereka melihat bagian yang terletak di sebelah kiri gambar atau layar. <br>  4. Pan Left (Geser Kiri): Kontrol ini memungkinkan pengguna untuk menggeser tampilan atau konten ke kiri, memungkinkan mereka melihat bagian yang terletak di sebelah kiri gambar atau layar. <br> 5. Zoom In (Perbesar): Membolehkan pengguna untuk memperbesar tampilan atau konten, membantu mereka melihat detail yang lebih halus atau mendekati objek tertentu. <br> 6. Zoom Out (Perkecil): Fungsi ini memungkinkan pengguna untuk memperkecil tampilan atau konten, memberi mereka pandangan yang lebih luas atau menjauh dari objek tertentu. <br> 7. Fullscreen (Layar Penuh): Kontrol ini mengubah tampilan ke mode layar penuh, menghilangkan gangguan dan memastikan fokus penuh pada konten atau gambar <br> 8. Autorotate: Kontrol otomatis ini memungkinkan tampilan atau konten untuk berputar secara otomatis, memudahkan pengalaman interaktif dan memungkinkan pengguna melihat dari berbagai sudut. ',
      
    },
    {
    element: '#fitur-menu',
    title: 'Fitur Menu',
    description: 'Fitur menu ini menyediakan berbagai informasi mengenai sekolah SMK N 8 Semarang, diantaranya sebagai berikut : <br> 1. Profil Sekolah: Menu ini memberikan akses ke informasi rinci mengenai profil sekolah, termasuk data demografis, fasilitas, kurikulum, dan hal-hal lain yang mencerminkan identitas dan karakteristik sekolah. <br> 2. Sejarah Sekolah: Menyajikan informasi tentang perjalanan dan perkembangan sekolah dari masa lalu hingga saat ini, menceritakan peristiwa signifikan yang membentuk identitas sekolah. <br> 3. Visi Misi Sekolah: Menu ini memberikan visi dan misi sekolah yang memberikan panduan terhadap tujuan dan arah perkembangan pendidikan di sekolah tersebut. <br> 4. Jurusan Sekolah: Memberikan informasi tentang berbagai jurusan atau program studi yang ditawarkan di sekolah, termasuk deskripsi singkat, kurikulum, dan peluang karir setelah lulus. <br> 5. Prestasi Sekolah: Menampilkan pencapaian dan prestasi terkini sekolah, seperti hasil ujian, prestasi akademik, kegiatan ekstrakurikuler, atau penghargaan yang diterima. <br> 6. Tentang Kami: Memberikan gambaran umum tentang sekolah, termasuk nilai-nilai inti, kebijakan, struktur organisasi, dan elemen-elemen lain yang mencerminkan identitas dan budaya sekolah. <br> 7. Feedback: Menyediakan saluran untuk memberikan umpan balik dari pengguna, baik itu siswa, orang tua, atau pengunjung lainnya. Ini dapat berupa kritik, saran, atau pertanyaan untuk meningkatkan pelayanan dan pengalaman pengguna.',
  },
    {
      element: '#kompas',
      title: 'Kompas',
      description: 'Fitur kompas pada Pannellum memberikan kemampuan untuk menampilkan dan mengontrol arah pandangan pengguna dalam panorama. <br> <img src="' + process.env.PUBLIC_URL + kompas + '" alt="Kompas">',
    },
  ];

export { tour };
