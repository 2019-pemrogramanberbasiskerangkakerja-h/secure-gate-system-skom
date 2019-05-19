CREATE TABLE `gate` (
  `id_gate` int(11) NOT NULL AUTO_INCREMENT,
  `nama_gate` varchar(100) DEFAULT NULL,
  `open` time DEFAULT NULL,
  `close` time DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_gate`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1

CREATE TABLE `log` (
  `id_log` int(11) NOT NULL AUTO_INCREMENT,
  `id_gate_log` int(11) DEFAULT NULL,
  `nrp_log` varchar(50) DEFAULT NULL,
  `message` varchar(255) NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`id_log`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nrp` varchar(50) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `role` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id_user`,`nrp`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1
