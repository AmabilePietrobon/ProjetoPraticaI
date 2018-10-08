
create table Usuario(
codUsuario int primary key,
nomeUsuario varchar(30) not null,
codIdade int not null,
constraint fkIdade foreign key (codidade) references FaixaEtaria(codIdade)
)

create table FaixaEtaria(
codIdade int primary key,
nomeFaixaEtaria varchar(4) not null,
codPlaylist int not null,
constraint fkPlaylist foreign key (codPlaylist) references Playlist(codPlaylist),
codInstrumento int not null,
constraint fkInstrumento foreign key (codInstrumento) references Instrumentos(codInstrumento)
)

create table Playlist(
codPlaylist int primary key,
nomePlaylist varchar(15) not null,
codMusica int not null,
constraint fkMusica foreign key (codMusica) references Musica(codMusica)
)

create table Musica(
codMusica int primary key,
nomeMusica varchar(20) not null
)

create table Instrumento(
codInstrumento int primary key,
nomeInstrumento varchar(15) not null,
imgInstrimento varchar(20) not null,
codSom int not null,
constraint fkSom foreign key (codSom) references Som(codSom)
)

create table Som(
codSom int primary key,
som varchar(15) not null,
codNota int not null,
constraint fkNota foreign key (codNota) references Nota(codNota)
)

create table Nota(
codNota int primary key,
cor varchar(10) not null,
nomeNota varchar(5) not null,
imgNota varchar(20) not null
)