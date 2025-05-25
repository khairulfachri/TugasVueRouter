<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Mahasiswa</h2>
      <router-link to="/views">Dashboard</router-link>
      <router-link to="/views/courses">Daftar Matakuliah</router-link>
      <router-link to="/views/my-courses">Matakuliah Saya</router-link>
      <router-link to="/views/course-detail">Detail Matakuliah</router-link>
      <router-link to="/views/course-materials">Materi Matakuliah</router-link>
      <router-link to="/views/course-assignments">Tugas Matakuliah</router-link>
      <router-link to="/views/progress">Progres Belajar</router-link>
      <router-link to="/views/profile">Profil</router-link>
      <router-link to="/views/settings">Pengaturan</router-link>
    </aside>

    <!-- Konten Utama -->
    <div class="content">
      <nav class="navbar">
        <h1>Sistem Informasi Matakuliah</h1>
        <span>Halo, Mahasiswa!</span>
      </nav>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
