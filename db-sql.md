SQL Query => script untuk save, store, change, get data dari db.

who need this skill?
    db admin
    system analyst
    programmer
    web dev
    data scientist
    business analyst

Facts of SQL Query:
    it is not an programming languange
    easy to understand
    could handle complex business data

who support SQL Query?
    MariaDB
    Access
    Oracle
    MySQL
    SQLServer
    SQLite
    Postgres


# Db and Table
Database:
DBMS vs Database
DB Management System used to access DB. 

Ideal Composition:
DB has Schema
Schema has many Table

example:
DB has Finance Schema
Finance Schema has many related Table about finance.

Table: Table has Column, Row

in table there is:
    Primary Key: unique key in every table.
    Foreign Key: a primary key in other table.
    example: NIK number Primary di Table KTP, di Table Bansos jadi foreign key.

Main Table:
    Master:
        Non transaction information. (Nama, Jenis Barang, Tanggal Lahir, dll)
        Not change oftenly.
        Paling up-to-date.
    Transaction:
        Tanggal kejadian.
        Historical data.
    
    Contoh: Toko HP
    Master: Table pelanggan
    Transaction: Table penjualan

Db Relasional:
    Contoh:
    Table Faktur:
        No Faktur
        Kode Pelanggan
        Kode Barang
    Info Master:
        Nama Pelanggan
        Nama Barang
    Info Transaction:
        Tanggal Transaksi
        Qty

    Define mana yang menggunakan table master mana yang transaction. Remember the business flow and rules.

# Data Definition Language
Perintah mengolah Db, Table, and Schema.
    Create = new table
    Alter   = change table component
    Drop    = delete table
    Truncate = delete data in table

# Data Modification Language
Perinta get dan change data
    select = ambil data table
    insert = input data table
    update = merubah data table
    delete = menghapus data row

# Perintah SQL Dasar
CREATE TABLE
rules dalam create table: cant start by number, huruf kecil (not mandatory), tanpa spasi.

contoh:
create table contohtable(
    // attribute:
    id_pelanggan varchar(50),
    namaPelanggan varchar(50),
    purchaseDate datetime,
    
    // primary key:
    constrain pk_pelanggan
    primary key (id_pelanggan)
);