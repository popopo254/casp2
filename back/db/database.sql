-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2025 at 05:53 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `casp2-demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `affiliations`
--

CREATE TABLE `affiliations` (
  `affiliation_ID` int(255) NOT NULL,
  `affiliation_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `affiliations`
--

INSERT INTO `affiliations` (`affiliation_ID`, `affiliation_name`) VALUES
(1, 'สำนักวิชาศิลปศาสตร์'),
(2, 'สำนักวิชาวิทยาศาสตร์'),
(3, 'สำนักวิชาการจัดการ'),
(4, 'สำนักวิชาเทคโนโลยีสารสนเทศ'),
(5, 'สำนักวิชานิติศาสตร์'),
(6, 'สำนักวิชาวิทยาศาสตร์เครื่องสำอาง'),
(7, 'สำนักวิชาวิทยาศาสตร์สุขภาพ'),
(8, 'สำนักวิชาพยาบาลศาสตร์'),
(9, 'สำนักวิชาเวชศาสตร์ชะลอวัยและฟื้นฟูสุขภาพ'),
(10, 'สำนักวิชาแพทยศาสตร์'),
(11, 'สำนักวิชาทันตแพทยศาสตร์'),
(12, 'คลินิกทันตกรรม สำนักวิชาทันตแพทยศาสตร์'),
(13, 'สำนักวิชานวัตกรรมสังคม'),
(14, 'สำนักวิชาจีนวิทยา'),
(15, 'สำนักวิชาการแพทย์บูรณาการ'),
(16, 'ศูนย์เครื่องมือวิทยาศาสตร์และเทคโนโลยี'),
(17, 'ศูนย์บรรณสารและสื่อการศึกษา (ห้องสมุด)'),
(18, 'ศูนย์บริการเทคโนโลยีสารสนเทศ'),
(19, 'ศูนย์บริการวิชาการ'),
(20, 'ศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง'),
(21, 'สำนักงานเลขานุการศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง'),
(22, 'โรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง'),
(23, 'โรงพยาบาลมหาวิทยาลัยแม่ฟ้าหลวง เชียงราย'),
(24, 'ศูนย์บริการสุขภาพแบบครบวงจรแห่งภาคเหนือ และอนุภูมิภาคลุ่มแม่น้ำโขง'),
(25, 'สถาบันวิจัยและนวัตกรรม มหาวิทยาลัยแม่ฟ้าหลวง'),
(26, 'ส่วนบริหารงานวิจัย'),
(27, 'ส่วนจัดการทรัพย์สินทางปัญญาและนวัตกรรม'),
(28, 'สถาบันนวัตกรรมการเรียนรู้มหาวิทยาลัยแม่ฟ้าหลวง'),
(29, 'ส่วนทะเบียนและประมวลผล'),
(30, 'ฝ่ายรับนักศึกษา'),
(31, 'ส่วนพัฒนานักศึกษา'),
(32, 'ส่วนพัฒนาความสัมพันธ์ระหว่างประเทศ'),
(33, 'หน่วยงานส่งเสริมการบริการนักศึกษาเบ็ดเสร็จ (M for U Centre)'),
(34, 'ส่วนประกันคุณภาพการศึกษาและพัฒนาหลักสูตร'),
(35, 'สำนักงานบัณฑิตศึกษา'),
(36, 'ส่วนจัดหางานและฝึกงานของนักศึกษา'),
(37, 'โรงพยาบาลมหาวิทยาลัยแม่ฟ้าหลวง สาขากรุงเทพมหานครฯ'),
(38, 'ศูนย์กีฬามหาวิทยาลัยแม่ฟ้าหลวง'),
(39, 'สถาบันชาและกาแฟ แห่งมหาวิทยาลัยแม่ฟ้าหลวง'),
(40, 'ศูนย์นวัตกรรมสมุนไพรครบวงจร มหาวิทยาลัยแม่ฟ้าหลวง'),
(41, 'สำนักงานให้คำปรึกษาและช่วยเหลือนักศึกษา'),
(42, 'ส่วนสารบรรณ อำนวยการและนิติการ'),
(43, 'ส่วนการเจ้าหน้าที่'),
(44, 'ส่วนประชาสัมพันธ์'),
(45, 'ส่วนพัสดุ'),
(46, 'ส่วนการเงินและบัญชี'),
(47, 'ส่วนนโยบายและแผน'),
(48, 'ส่วนอาคารสถานที่'),
(49, 'หน่วยประสานงานมหาวิทยาลัยแม่ฟ้าหลวง กรุงเทพฯ'),
(50, 'สำนักงานสภามหาวิทยาลัย'),
(51, 'หน่วยตรวจสอบภายใน'),
(52, 'สำนักงานจัดการทรัพย์สินและรายได้'),
(53, 'M-Store (ศูนย์หนังสือมหาวิทยาลัยแม่ฟ้าหลวง)'),
(54, 'ผลิตภัณฑ์จากผลงานการวิจัยมหาวิทยาลัยแม่ฟ้าหลวง'),
(55, 'วนาเวศน์'),
(56, 'วนาศรม'),
(57, 'ศูนย์ความเป็นเลิศทางด้านการวิจัยเชื้อรา'),
(58, 'โครงการจัดตั้งหน่วยความร่วมมือทางวิชาการฝรั่งเศส-อนุภูมิภาคลุ่มแม่น้ำโขง'),
(59, 'สำนักงานโครงการสวนพฤกษศาสตร์มหาวิทยาลัยแม่ฟ้าหลวงเฉลิมพระเกียรติ 80 พรรษา'),
(60, 'ศูนย์ความเป็นเลิศด้านนวัตกรรมผลิตภัณฑ์ธรรมชาติ'),
(61, 'หน่วยจัดการสารสนเทศ'),
(62, 'โครงการจัดตั้งพิพิธภัณฑ์อารยธรรมลุ่มน้ำโขง'),
(63, 'ศูนย์ภาษาและวัฒนธรรมจีนสิรินธร');

-- --------------------------------------------------------

--
-- Table structure for table `controls`
--

CREATE TABLE `controls` (
  `control_id` int(255) NOT NULL,
  `control_name` varchar(100) NOT NULL,
  `control_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `controls`
--

INSERT INTO `controls` (`control_id`, `control_name`, `control_status`) VALUES
(1, 'is_open_proposal', 1);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `permission_id` int(255) NOT NULL,
  `permission_name` varchar(255) NOT NULL,
  `permission_eng_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`permission_id`, `permission_name`, `permission_eng_name`) VALUES
(1, 'หัวหน้าคณะบริหารโครงการ (Project Leader)', 'Project Leader'),
(2, 'หัวหน้าหน่วยงาน (Dean/Director/Head)', 'Dean/Director/Head'),
(3, 'คณะกรรมการบริหารฯ  (Academic Services Board of Commitee)', 'Academic Services Board of Commitee'),
(4, 'ผู้ดูแลระบบ (Admin)', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_id` int(255) NOT NULL,
  `project_type` int(50) NOT NULL,
  `project_data_ref` int(255) DEFAULT NULL,
  `project_user` int(100) NOT NULL,
  `project_affiliation` int(100) NOT NULL,
  `project_status` int(10) DEFAULT 1,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_data`
--

CREATE TABLE `project_data` (
  `project_data_id` int(255) NOT NULL,
  `project_id` int(100) NOT NULL,
  `project_data_p_1` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`project_data_p_1`)),
  `project_data_p_2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `project_data_p_3` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `project_data_p_4` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `project_data_p_5` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `project_data_p_6` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `project_data_p_7` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_status`
--

CREATE TABLE `project_status` (
  `project_status_id` int(10) NOT NULL,
  `project_status_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `project_status`
--

INSERT INTO `project_status` (`project_status_id`, `project_status_name`) VALUES
(1, 'อยู่ระหว่างจัดทำข้อเสนอโครงการ'),
(2, 'เสนอให้หัวหน้าหน่วยงานพิจารณา'),
(3, 'ตีกลับจากหัวหน้าหน่วยงาน'),
(4, 'เห็นชอบโดยหัวหน้าหน่วยงาน'),
(5, 'ตีกลับจากศูนย์บริการวิชาการ'),
(6, 'เสนอคณะกรรมการบริหารงานบริการวิชาการ'),
(7, 'ไม่อนุมัติ'),
(8, 'อนุมัติ'),
(9, 'อนุมัติเเบบมีเงื่อนไข'),
(10, 'เห็นชอบในหลักการ Major Revision'),
(11, 'เห็นชอบในหลักการ ให้ใช้งบประมาณจากแหล่งอื่น'),
(12, 'เห็นชอบในหลักการ ให้ประชาสัมพันธ์'),
(13, 'เห็นชอบในหลักการ ให้สำรวจกลุ่มเป้าหมาย');

-- --------------------------------------------------------

--
-- Table structure for table `project_timelines`
--

CREATE TABLE `project_timelines` (
  `project_timeline_id` int(255) NOT NULL,
  `project_timeline_projectId` int(255) NOT NULL,
  `project_timeline_status_id` int(255) NOT NULL,
  `project_timeline_comment` varchar(255) DEFAULT NULL,
  `specified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_types`
--

CREATE TABLE `project_types` (
  `project_type_id` int(10) NOT NULL,
  `project_type_name` varchar(20) NOT NULL,
  `project_type_thai_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `project_types`
--

INSERT INTO `project_types` (`project_type_id`, `project_type_name`, `project_type_thai_name`) VALUES
(1, 'Academic_No_Income', 'โครงการบริการวิชาการที่ไม่มีรายได้\n\n'),
(2, 'Academic_With_Income', 'โครงการบริการวิชาการ\nที่มีรายได้จากค่าบริการวิชาการ'),
(3, 'Short_Term_Courses', 'หลักสูตรระยะสั้น\n(ประเภทเทียบเคียงหลักสูตร\nการศึกษา)\n'),
(4, 'Teacher_Student_Dev', 'โครงการบริการวิชาการ\nที่ไม่มีรายได้\nสำหรับพัฒนาครูและนักเรียน\n');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_employeeID` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_roleID` int(255) DEFAULT NULL,
  `user_affiliation` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_employeeID`, `user_name`, `user_roleID`, `user_affiliation`, `created_at`) VALUES
(1, '6531501076@lamduan.mfu.ac.th', '6531501076', 'ปรเมษฐ์ ซื่อตรง', 1, 4, '2025-04-21 07:49:59'),
(3, '6531501068@lamduan.mfu.ac.th', '6531501068', 'Nareerak', 1, 4, '2025-02-16 09:38:02'),
(4, '6531501130@lamduan.mfu.ac.th', '6531501130', 'Achiraya', 1, 4, '2025-02-16 09:38:02'),
(5, 'test@lamduan.mfu.ac.th', 'xxxxxxxxxx', 'test', 1, 4, '2025-02-17 12:14:34'),
(11, 'ashiraya.sri@mfu.ac.th', '57364179', 'Ashiraya', 1, 19, '2025-05-21 08:06:05'),
(12, 'tapanee.pua@mfu.ac.th', '44340025', 'Tapanee Puapunpattana', NULL, 19, '2025-05-27 01:22:54'),
(13, 'wilawan.cha@mfu.ac.th', '46210125', 'Wilawan Champakaew', NULL, 1, '2025-05-27 01:25:18'),
(14, 'narumon.cha@mfu.ac.th', '50364064', 'Narumon Chantonganun', NULL, 19, '2025-05-27 01:26:37'),
(15, 'patcharin.sri@mfu.ac.th', '55364112', 'Patcharin Srijai', NULL, 19, '2025-05-27 01:28:00'),
(16, 'pinich.mun@mfu.ac.th', '49364109', 'Pinich Mungmek', NULL, 19, '2025-05-27 01:30:23'),
(17, 'weerayut@mfu.ac.th', '51364123', 'Weerayut Wongsupa', NULL, 19, '2025-05-27 01:31:06'),
(18, 'rawiwan.suk@mfu.ac.th', '48364104', 'Rawiwan Sukphol', NULL, 19, '2025-05-27 01:32:18'),
(19, 'piyada.tha@mfu.ac.th', '51364087', 'piyada thananchai', NULL, 19, '2025-05-27 01:34:07'),
(20, 'rattana.moo@mfu.ac.th', '59364202', 'rattana moontree', NULL, 19, '2025-05-27 01:35:06'),
(21, 'kamolchanok.kho@mfu.ac.th', '48364070', 'kamolchanok Khomkaew', NULL, 19, '2025-05-27 01:40:11'),
(22, 'darunan@mfu.ac.th', '52364025', 'Darunan Nanta', NULL, 19, '2025-05-27 01:40:53'),
(23, 'khaunnapa.kae@mfu.ac.th', '58364006', 'Khaunnapa Kaewart', NULL, 19, '2025-05-27 01:41:36'),
(24, 'tanyarat.sri@mfu.ac.th', '67364041', 'Tanyarat Srikhong', NULL, 19, '2025-05-27 01:43:11'),
(25, 'pattita.thu@mfu.ac.th', '48364028', 'Pattita Thungkaew', NULL, 19, '2025-05-27 01:44:01'),
(26, 'kwansuda@mfu.ac.th', '51364025', 'Kwansuda Vongleasagoon', NULL, 19, '2025-05-27 01:44:47'),
(27, 'onnicha.jam@mfu.ac.th', '67364058', 'Onnicha Jampakaew', NULL, 19, '2025-05-27 01:45:25'),
(33, '6531501120@lamduan.mfu.ac.th', '6531501120', 'Augajom Aomjagu', NULL, 4, '2025-05-27 05:28:30'),
(34, 'noppakan@mfu.ac.th', '88888888', 'นายนพกานต์ พินิจ', NULL, 4, '2025-05-28 15:48:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_access`
--

CREATE TABLE `user_access` (
  `access_id` int(255) NOT NULL,
  `access_user` int(255) NOT NULL,
  `access_permission` int(255) DEFAULT NULL,
  `access_isActive` tinyint(1) NOT NULL DEFAULT 1,
  `update_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user_access`
--

INSERT INTO `user_access` (`access_id`, `access_user`, `access_permission`, `access_isActive`, `update_at`) VALUES
(9, 3, 1, 1, '2025-02-16 16:24:23.065958'),
(10, 3, 2, 1, '2025-02-15 20:18:18.333345'),
(11, 3, 3, 1, '2025-02-16 16:25:30.893307'),
(12, 3, 4, 1, '2025-02-15 20:18:18.333345'),
(13, 4, 1, 1, '2025-02-15 20:18:18.333345'),
(14, 4, 2, 1, '2025-02-15 20:18:18.333345'),
(15, 4, 3, 1, '2025-02-15 20:18:18.333345'),
(16, 4, 4, 1, '2025-02-15 20:18:18.333345'),
(20, 1, 4, 1, '2025-02-16 18:25:28.002206'),
(44, 11, 1, 1, '2025-05-21 08:05:36.296267'),
(46, 11, 4, 1, '2025-05-21 08:05:37.369185'),
(47, 1, 3, 1, '2025-05-26 16:55:06.574863'),
(48, 1, 2, 1, '2025-05-26 16:55:09.798283'),
(49, 1, 1, 1, '2025-05-26 19:51:27.803001'),
(50, 12, 1, 1, '2025-05-27 01:22:54.707175'),
(51, 12, 3, 1, '2025-05-27 01:24:03.336584'),
(52, 13, 1, 1, '2025-05-27 01:25:18.694383'),
(53, 14, 1, 1, '2025-05-27 01:26:37.850922'),
(54, 15, 1, 1, '2025-05-27 01:28:00.836876'),
(55, 13, 2, 1, '2025-05-27 01:28:34.142959'),
(56, 14, 4, 1, '2025-05-27 01:29:05.457626'),
(57, 15, 4, 1, '2025-05-27 01:29:22.223611'),
(58, 16, 1, 1, '2025-05-27 01:30:23.757660'),
(59, 17, 1, 1, '2025-05-27 01:31:06.238394'),
(60, 18, 1, 0, '2025-05-27 01:38:43.479857'),
(61, 19, 1, 1, '2025-05-27 01:34:07.333433'),
(62, 20, 1, 1, '2025-05-27 01:35:06.709274'),
(63, 16, 3, 1, '2025-05-27 01:37:34.961210'),
(64, 18, 2, 1, '2025-05-27 01:38:25.050392'),
(65, 18, 3, 1, '2025-05-27 01:38:41.203093'),
(66, 21, 1, 1, '2025-05-27 01:40:11.466416'),
(67, 22, 1, 0, '2025-05-27 01:49:10.333839'),
(68, 23, 1, 1, '2025-05-27 01:41:36.169790'),
(69, 24, 1, 1, '2025-05-27 01:43:11.333305'),
(70, 25, 1, 1, '2025-05-27 01:44:01.417226'),
(71, 26, 1, 1, '2025-05-27 01:44:47.621095'),
(72, 27, 1, 1, '2025-05-27 01:45:25.795948'),
(73, 27, 4, 1, '2025-05-27 01:46:04.665488'),
(74, 26, 2, 1, '2025-05-27 01:46:43.746454'),
(75, 25, 4, 1, '2025-05-27 01:47:12.128026'),
(76, 23, 4, 1, '2025-05-27 01:48:31.558450'),
(77, 22, 2, 1, '2025-05-27 01:49:20.930437'),
(78, 22, 3, 1, '2025-05-27 01:49:28.683582'),
(79, 21, 4, 1, '2025-05-27 01:49:50.049775'),
(91, 33, 1, 1, '2025-05-27 05:28:30.725280'),
(92, 33, 3, 1, '2025-05-27 05:36:28.102500'),
(93, 33, 2, 1, '2025-05-27 05:36:29.059659'),
(94, 33, 4, 1, '2025-05-27 05:36:30.028027'),
(95, 34, 1, 1, '2025-05-28 15:45:28.427958');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `affiliations`
--
ALTER TABLE `affiliations`
  ADD PRIMARY KEY (`affiliation_ID`);

--
-- Indexes for table `controls`
--
ALTER TABLE `controls`
  ADD PRIMARY KEY (`control_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`permission_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `fk_project_type` (`project_type`),
  ADD KEY `fk_project_ref` (`project_data_ref`),
  ADD KEY `fk_project_user` (`project_user`),
  ADD KEY `fk_project_affiliation` (`project_affiliation`),
  ADD KEY `fk_project_status` (`project_status`);

--
-- Indexes for table `project_data`
--
ALTER TABLE `project_data`
  ADD PRIMARY KEY (`project_data_id`),
  ADD KEY `fk_project_id` (`project_id`);

--
-- Indexes for table `project_status`
--
ALTER TABLE `project_status`
  ADD PRIMARY KEY (`project_status_id`);

--
-- Indexes for table `project_timelines`
--
ALTER TABLE `project_timelines`
  ADD PRIMARY KEY (`project_timeline_id`),
  ADD KEY `fk_status_id` (`project_timeline_status_id`),
  ADD KEY `fk_project_id` (`project_timeline_projectId`);

--
-- Indexes for table `project_types`
--
ALTER TABLE `project_types`
  ADD PRIMARY KEY (`project_type_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `fk_user_affiliation` (`user_affiliation`);

--
-- Indexes for table `user_access`
--
ALTER TABLE `user_access`
  ADD PRIMARY KEY (`access_id`),
  ADD KEY `fk_access_permission` (`access_permission`),
  ADD KEY `fk_access_user` (`access_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `affiliations`
--
ALTER TABLE `affiliations`
  MODIFY `affiliation_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `controls`
--
ALTER TABLE `controls`
  MODIFY `control_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `permission_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_data`
--
ALTER TABLE `project_data`
  MODIFY `project_data_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_status`
--
ALTER TABLE `project_status`
  MODIFY `project_status_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `project_timelines`
--
ALTER TABLE `project_timelines`
  MODIFY `project_timeline_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_types`
--
ALTER TABLE `project_types`
  MODIFY `project_type_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `user_access`
--
ALTER TABLE `user_access`
  MODIFY `access_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `fk_project_affiliation` FOREIGN KEY (`project_affiliation`) REFERENCES `affiliations` (`affiliation_ID`),
  ADD CONSTRAINT `fk_project_ref` FOREIGN KEY (`project_data_ref`) REFERENCES `project_data` (`project_data_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_project_status` FOREIGN KEY (`project_status`) REFERENCES `project_status` (`project_status_id`),
  ADD CONSTRAINT `fk_project_type` FOREIGN KEY (`project_type`) REFERENCES `project_types` (`project_type_id`),
  ADD CONSTRAINT `fk_project_user` FOREIGN KEY (`project_user`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `project_timelines`
--
ALTER TABLE `project_timelines`
  ADD CONSTRAINT `fk_project_id` FOREIGN KEY (`project_timeline_projectId`) REFERENCES `projects` (`project_id`),
  ADD CONSTRAINT `fk_status_id` FOREIGN KEY (`project_timeline_status_id`) REFERENCES `project_status` (`project_status_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_user_affiliation` FOREIGN KEY (`user_affiliation`) REFERENCES `affiliations` (`affiliation_ID`);

--
-- Constraints for table `user_access`
--
ALTER TABLE `user_access`
  ADD CONSTRAINT `fk_access_permission` FOREIGN KEY (`access_permission`) REFERENCES `permissions` (`permission_id`),
  ADD CONSTRAINT `fk_access_user` FOREIGN KEY (`access_user`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
