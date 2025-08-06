# 🛡️ CYBER SECURITY

## 1. What is Cyber Security?

Cyber Security adalah praktik untuk melindungi sistem, jaringan, program, dan data dari serangan digital. Tujuan utamanya adalah menjaga:

- **Confidentiality** (kerahasiaan)
- **Integrity** (integritas)
- **Availability** (ketersediaan)

---

## 2. Profesi di Dunia Cyber Security

Beberapa profesi umum:

- 🔍 **Risk Assessor** – Menilai risiko keamanan
- 🛠️ **Penetration Tester** – Melakukan pengujian sistem secara etis
- 🚨 **Incident Response Team** – Menangani insiden keamanan
- 📊 **Security Monitoring (SOC Analyst)** – Memantau ancaman secara real-time

---

## 3. Tipe-Tipe Hacker

- 🎩 **Black Hat**: Hacker jahat, mencuri/menghancurkan sistem
- 🤝 **White Hat**: Hacker etis, bantu memperkuat sistem
- ⚪ **Grey Hat**: Hacker "nakal", kadang melanggar tapi tidak merusak

---

# 🧪 PENETRATION TESTING

## ✅ Best Practices

### Do's:

- Mendapat izin resmi (NDA / LoA)
- Upgrade skill secara berkala
- Aktif di komunitas white hat

### Don'ts:

- Random hacking tanpa izin
- Minta tebusan (ransom)
- Merusak sistem atau data

---

## 🧩 Konsep Pentest

Wajib menjunjung:

- **Confidentiality**
- **Integrity**
- **Availability**

---

## 🔄 Phases of Penetration Testing

### 1. Reconnaissance / Footprinting

Mengumpulkan informasi tentang target.

#### 🟢 Passive Methods:

- `Shodan` – Mencari device IoT/server
- `Whois` – Mengetahui pemilik domain/IP
- `Google Hacking` – Mencari celah melalui Google
- `Netcraft` – Cek hosting/domain terkait

#### 🔴 Active Methods:

- `Nmap` – Network scanning
- `Dirbuster` / `Dirsearch` / `Dirhunt` – Cari direktori tersembunyi
- `DNS Zone Transfer` – Ambil data DNS internal
- `CMSmap` – Peta celah CMS

---

### 2. Scanning

- 🔍 Port scanning (open port)
- 🧱 Vulnerability scanning
- 🗺️ Network mapping

---

### 3. Gaining Access

- Memanfaatkan celah untuk masuk ke sistem target

---

### 4. Privilege Escalation

- Meningkatkan hak akses menjadi admin/root

---

### 5. Reporting

- Dokumentasi lengkap proses, tools, hasil, dan rekomendasi

---

# 🔎 INFORMATION GATHERING

## 🟢 Passive Techniques:

| Tool               | Fungsi                                     |
| ------------------ | ------------------------------------------ |
| **Shodan**         | Search engine perangkat publik             |
| **Whois**          | Lihat informasi domain dan IP              |
| **Google Dorking** | Query untuk menemukan file/login page/etc  |
| **Netcraft**       | Info hosting, tech stack, domain affiliasi |

Contoh Google Dork:
site:ejournal.esaunggul.ac.id intitle:"login" filetype:"php"

---

## 🔴 Active Techniques:

| Tool                  | Keterangan                                  |
| --------------------- | ------------------------------------------- |
| **Dirbuster**         | Scan direktori tersembunyi                  |
| **Dirsearch**         | Python tool, install dari GitHub            |
| **Dirhunt**           | Lebih cepat dari dirsearch, support JS      |
| **DNS Zone Transfer** | Ambil konfigurasi DNS internal (jika bocor) |
| **Nmap**              | Scan port, OS detection, service version    |
| **WPScan**            | Khusus untuk cek keamanan website WordPress |

---

# 🛠️ TOOL SUMMARY – PLUS MINUS DAN KOMBINASI IDEAL

| Tool                  | Tipe    | Fungsi Utama                         | Kelebihan                                                             | Kekurangan                                                        | Kombinasi Ideal Dengan...       |
| --------------------- | ------- | ------------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------- |
| **Shodan**            | Passive | Search engine perangkat publik       | - Cepat, real-time info<br>- Banyak filter pencarian                  | - Tidak selalu up-to-date<br>- Hanya data yang sudah terindeks    | Netcraft, Whois, Nmap           |
| **Whois**             | Passive | Info domain & IP                     | - Sangat mudah digunakan<br>- Bisa lihat kontak & organisasi          | - Data bisa disembunyikan oleh registrar (privacy protection)     | Shodan, DNS Zone Transfer       |
| **Google Dorking**    | Passive | Cari celah via Google                | - Powerful & gratis<br>- Bisa temukan file sensitif                   | - Perlu kreativitas & experience<br>- Bisa diblokir Google        | Dirbuster, Dirsearch            |
| **Netcraft**          | Passive | Hosting, tech stack, domain afiliasi | - Informasi lengkap<br>- Lacak perubahan server                       | - Beberapa data hanya tersedia via akun premium                   | Shodan, Whois                   |
| **Dirbuster**         | Active  | Cari direktori tersembunyi           | - Banyak wordlist bawaan<br>- Terintegrasi dengan OWASP ZAP           | - GUI lama, lebih lambat dari dirsearch                           | Google Dork, Nmap, WPScan       |
| **Dirsearch**         | Active  | Cari direktori dengan script Python  | - Cepat, support header/token<br>- Bisa disesuaikan wordlist          | - Perlu install manual dari GitHub                                | Dirhunt, Nmap                   |
| **Dirhunt**           | Active  | Scan direktori dengan parsing JS     | - Lebih cepat dari dirsearch<br>- Bisa parsing link internal          | - Masih dalam pengembangan<br>- Belum stabil seperti dirsearch    | Dirsearch, Google Dorking       |
| **DNS Zone Transfer** | Active  | Ambil data DNS internal              | - Bisa dapat struktur internal lengkap jika berhasil                  | - Sangat jarang berhasil (karena sudah banyak server aman)        | Whois, Nmap                     |
| **Nmap**              | Active  | Scan port, OS, services              | - Sangat powerful<br>- Banyak opsi (stealth, OS detect, script, dll.) | - Bisa memicu alarm IDS/IPS<br>- Butuh pemahaman flag dan output  | Semua tools Active/Passive      |
| **WPScan**            | Active  | Scan celah keamanan WordPress        | - Fokus pada WordPress<br>- Database kerentanan terus update          | - Hanya untuk WordPress<br>- Perlu API token jika mau lebih dalam | Nmap, Dirbuster, Google Dorking |

---

## ⭐ Kombinasi Tool Ideal Berdasarkan Kebutuhan

### 🔍 Reconnaissance (Info Awal)

Gunakan:

- **Whois** + **Shodan** + **Netcraft**  
  → Dapatkan gambaran siapa pemilik, lokasi hosting, dan sistem terbuka

### 🕳️ Pemetaan Web App

Gunakan:

- **Google Dorking** + **Dirbuster / Dirsearch** + **Dirhunt**  
  → Temukan direktori tersembunyi, login panel, dan file publik

### 🌐 Network Assessment

Gunakan:

- **Nmap** + **DNS Zone Transfer** + **Whois**  
  → Lihat open port, layanan berjalan, dan potensi konfigurasi lemah

### ⚠️ CMS Vulnerability Scan

Gunakan:

- **WPScan** (untuk WordPress) + **Nmap** + **Dirbuster**  
  → Cek plugin bermasalah, user enum, dan directory exposure

### 💡 Tips:

- Jangan gunakan tool active scanning tanpa izin resmi (NDA)!
- Latihan di lab legal seperti: `TryHackMe`, `HackTheBox`, `VulnHub`
- Gunakan VPN dan mode stealth (di Nmap) agar lebih aman dalam pengujian

---
