import mahaLakshmiImg from '../../assets/maha-lakshmi.jpeg';
import sivaAradhanaEventImg from '../../assets/siva-aradhana-event.jpeg';
import mangalaGauriMainImg from '../../assets/mangala-gauri-main.jpeg';
import mahaImg from '../../assets/maha.jpeg';
import mahakalaImg from '../../assets/mahakala.jpeg';
import rudhraImg from '../../assets/rudhra.jpeg';
import soubhagyaImg from '../../assets/soubhagya.jpeg';
import bhuamaImg from '../../assets/bhuama.jpeg';
import homaImg from '../../assets/homa.jpeg';

import sriVidyaImg from '../../assets/sri_vidya.png';
import chandiImg from '../../assets/chandi.png';
import shaivamImg from '../../assets/shaivam.png';
import vaishnavamImg from '../../assets/vaishnavam.png';
import skaandamImg from '../../assets/skaandam.png';
import sauramImg from '../../assets/sauram.png';
import ashtaLakshmiImg from '../../assets/ashta_lakshmi_vidya.png';
import dasaMahaVidyasImg from '../../assets/dasa_maha_vidyas.png';
import fundamentalsImg from '../../assets/fundamentals_of_tantra.png';
import kshipraGanapatiImg from '../../assets/kshipra_ganapati.png';
import completeChakraImg from '../../assets/complete_chakra_course.png';
import ayyappaVidyaImg from '../../assets/ayyappa_vidya.png';

export const formatINR = (value) =>
  '₹' + Number(value).toLocaleString('en-IN');

export const adminProfile = {
  name: 'Acharya Narayana Sarma',
  firstName: 'Acharya',
  lastName: 'Narayana Sarma',
  email: 'admin@srimahavidyesvari.org',
  phone: '+91 93908 86029',
  role: 'Administrator',
  initials: 'NS',
  about:
    'Guardian of the Tantra Peetham. Oversees students, courses, rituals, offerings and all sacred learning activities of Sri Mahavidyesvari Tantra Peetham.',
};

export const dashboardStats = [
  { id: 'students', label: 'Total Students', value: '1,248', trend: '+12.4%', up: true },
  { id: 'active', label: 'Active Students', value: '986', trend: '+8.1%', up: true },
  { id: 'courses', label: 'Total Courses', value: '24', trend: '+2 this month', up: true },
  { id: 'classes', label: 'Active Classes', value: '18', trend: '+3 live this week', up: true },
  { id: 'videos', label: 'Total Videos', value: '156', trend: '+14 uploaded', up: true },
  { id: 'revenue', label: 'Total Revenue', value: '₹4,85,600', trend: '+18.6%', up: true },
];

export const monthlyRevenue = [
  { month: 'March', amount: 51200 },
  { month: 'April', amount: 63800 },
  { month: 'May', amount: 57400 },
  { month: 'June', amount: 78400 },
  { month: 'July', amount: 94300 },
  { month: 'August', amount: 140500 },
];

export const recentStudents = [
  { id: 'STU-1048', name: 'Lakshmi Prasad', email: 'lakshmi.prasad@gmail.com', course: 'Sri Vidya Foundation', joined: '10 Aug 2026', status: 'Active' },
  { id: 'STU-1047', name: 'Meenakshi Subramanian', email: 'meena.sub@gmail.com', course: 'Chandi Vidya', joined: '09 Aug 2026', status: 'Active' },
  { id: 'STU-1046', name: 'Raghunath Iyer', email: 'raghu.iyer@yahoo.com', course: 'Shaivam Darshanam', joined: '08 Aug 2026', status: 'Pending' },
  { id: 'STU-1045', name: 'Anitha Krishnan', email: 'anitha.k@gmail.com', course: 'Mangala Gaurī Vratam', joined: '07 Aug 2026', status: 'Active' },
  { id: 'STU-1044', name: 'Vishwanath Rao', email: 'vishwa.rao@outlook.com', course: 'Vaishnavam', joined: '05 Aug 2026', status: 'Inactive' },
  { id: 'STU-1043', name: 'Soundarya Murthy', email: 'soundarya.m@gmail.com', course: 'Skaandam', joined: '04 Aug 2026', status: 'Active' },
  { id: 'STU-1042', name: 'Ganapathi Bhat', email: 'ganapathi.b@gmail.com', course: 'Mantra Sadhana', joined: '02 Aug 2026', status: 'Pending' },
];

export const students = [
  { id: 'STU-1048', name: 'Lakshmi Prasad', email: 'lakshmi.prasad@gmail.com', phone: '+91 98450 11223', courses: ['Sri Vidya Foundation', 'Devi Upasana'], joined: '10 Aug 2026', status: 'Active' },
  { id: 'STU-1047', name: 'Meenakshi Subramanian', email: 'meena.sub@gmail.com', phone: '+91 98401 44221', courses: ['Chandi Vidya'], joined: '09 Aug 2026', status: 'Active' },
  { id: 'STU-1046', name: 'Raghunath Iyer', email: 'raghu.iyer@yahoo.com', phone: '+91 98860 78812', courses: ['Shaivam Darshanam'], joined: '08 Aug 2026', status: 'Pending' },
  { id: 'STU-1045', name: 'Anitha Krishnan', email: 'anitha.k@gmail.com', phone: '+91 90032 55478', courses: ['Mangala Gaurī Vratam', 'Soubhagya Pradā Pūjā'], joined: '07 Aug 2026', status: 'Active' },
  { id: 'STU-1044', name: 'Vishwanath Rao', email: 'vishwa.rao@outlook.com', phone: '+91 98452 90031', courses: ['Vaishnavam'], joined: '05 Aug 2026', status: 'Inactive' },
  { id: 'STU-1043', name: 'Soundarya Murthy', email: 'soundarya.m@gmail.com', phone: '+91 99010 12345', courses: ['Skaandam', 'Rudrābhiṣekam'], joined: '04 Aug 2026', status: 'Active' },
  { id: 'STU-1042', name: 'Ganapathi Bhat', email: 'ganapathi.b@gmail.com', phone: '+91 96322 77110', courses: ['Mantra Sadhana'], joined: '02 Aug 2026', status: 'Pending' },
  { id: 'STU-1041', name: 'Revathi Menon', email: 'revathi.m@gmail.com', phone: '+91 98950 22134', courses: ['Ashta Lakṣmī Vidyā'], joined: '30 Jul 2026', status: 'Active' },
  { id: 'STU-1040', name: 'Karthik Raghavendra', email: 'karthik.r@gmail.com', phone: '+91 91230 88091', courses: ['Fundamentals of Tantra'], joined: '28 Jul 2026', status: 'Active' },
  { id: 'STU-1039', name: 'Padmavathi Rao', email: 'padma.rao@gmail.com', phone: '+91 97010 55667', courses: ['Sauram', 'Gayatri Upasana'], joined: '25 Jul 2026', status: 'Inactive' },
  { id: 'STU-1038', name: 'Arjun Deshpande', email: 'arjun.d@yahoo.com', phone: '+91 98801 22445', courses: ['Complete Chakra Course'], joined: '22 Jul 2026', status: 'Active' },
  { id: 'STU-1037', name: 'Vasundhara Hegde', email: 'vasundhara.h@gmail.com', phone: '+91 90350 44321', courses: ['Dasa Mahā Vidyās'], joined: '20 Jul 2026', status: 'Pending' },
];

export const recentPayments = [
  { id: 'PAY-9123', student: 'Lakshmi Prasad', course: 'Sri Vidya Foundation', amount: 6500, date: '11 Aug 2026', status: 'Paid' },
  { id: 'PAY-9122', student: 'Meenakshi Subramanian', course: 'Chandi Vidya', amount: 8200, date: '10 Aug 2026', status: 'Paid' },
  { id: 'PAY-9121', student: 'Anitha Krishnan', course: 'Mangala Gaurī Vratam', amount: 2400, date: '09 Aug 2026', status: 'Paid' },
  { id: 'PAY-9120', student: 'Raghunath Iyer', course: 'Shaivam Darshanam', amount: 5400, date: '08 Aug 2026', status: 'Pending' },
  { id: 'PAY-9119', student: 'Soundarya Murthy', course: 'Rudrābhiṣekam', amount: 3100, date: '07 Aug 2026', status: 'Paid' },
  { id: 'PAY-9118', student: 'Ganapathi Bhat', course: 'Mantra Sadhana', amount: 4800, date: '06 Aug 2026', status: 'Failed' },
];

export const transactions = [
  { txId: 'TXN-88441', student: 'Lakshmi Prasad', course: 'Sri Vidya Foundation', amount: 6500, date: '11 Aug 2026', method: 'UPI', status: 'Paid' },
  { txId: 'TXN-88440', student: 'Meenakshi Subramanian', course: 'Chandi Vidya', amount: 8200, date: '10 Aug 2026', method: 'Card', status: 'Paid' },
  { txId: 'TXN-88439', student: 'Anitha Krishnan', course: 'Mangala Gaurī Vratam', amount: 2400, date: '09 Aug 2026', method: 'UPI', status: 'Paid' },
  { txId: 'TXN-88438', student: 'Raghunath Iyer', course: 'Shaivam Darshanam', amount: 5400, date: '08 Aug 2026', method: 'Net Banking', status: 'Pending' },
  { txId: 'TXN-88437', student: 'Soundarya Murthy', course: 'Rudrābhiṣekam', amount: 3100, date: '07 Aug 2026', method: 'UPI', status: 'Paid' },
  { txId: 'TXN-88436', student: 'Ganapathi Bhat', course: 'Mantra Sadhana', amount: 4800, date: '06 Aug 2026', method: 'Card', status: 'Failed' },
  { txId: 'TXN-88435', student: 'Revathi Menon', course: 'Ashta Lakṣmī Vidyā', amount: 9800, date: '05 Aug 2026', method: 'UPI', status: 'Paid' },
  { txId: 'TXN-88434', student: 'Karthik Raghavendra', course: 'Fundamentals of Tantra', amount: 3600, date: '04 Aug 2026', method: 'UPI', status: 'Paid' },
  { txId: 'TXN-88433', student: 'Padmavathi Rao', course: 'Sauram', amount: 5200, date: '02 Aug 2026', method: 'Net Banking', status: 'Paid' },
  { txId: 'TXN-88432', student: 'Arjun Deshpande', course: 'Complete Chakra Course', amount: 12000, date: '01 Aug 2026', method: 'Card', status: 'Pending' },
];

export const upcomingClasses = [
  { id: 'CLS-2201', title: 'Śrāvaṇa Mahālakṣmī Ārādhana', course: 'Devi Upasana', date: '14 August 2026', time: '7:00 PM', students: 42, status: 'Live' },
  { id: 'CLS-2202', title: 'Śrī Rudram Chanting Session', course: 'Shaivam Darshanam', date: '15 August 2026', time: '6:30 AM', students: 28, status: 'Scheduled' },
  { id: 'CLS-2203', title: 'Śrāvaṇa Somavāra Abhiṣeka', course: 'Rudrābhiṣekam', date: '17 August 2026', time: '7:00 PM', students: 36, status: 'Scheduled' },
  { id: 'CLS-2204', title: 'Mangala Gaurī Vratam Sādhanā', course: 'Soubhagya Pradā Pūjā', date: '18 August 2026', time: '6:00 PM', students: 31, status: 'Scheduled' },
  { id: 'CLS-2205', title: 'Lalitā Sahasranāma Recitation', course: 'Sri Vidya Foundation', date: '19 August 2026', time: '7:30 PM', students: 24, status: 'Scheduled' },
];

export const courses = [
  { id: 'CRS-01', image: sriVidyaImg, title: 'Sri Vidya Foundation', guru: 'Acharya Narayana Sarma', students: 342, price: 14500, status: 'Published', created: '12 Jan 2026' },
  { id: 'CRS-02', image: chandiImg, title: 'Chandi Vidya', guru: 'Acharya Narayana Sarma', students: 218, price: 16800, status: 'Published', created: '03 Feb 2026' },
  { id: 'CRS-03', image: shaivamImg, title: 'Shaivam Darshanam', guru: 'Guru Agastya Lineage', students: 176, price: 12400, status: 'Published', created: '21 Feb 2026' },
  { id: 'CRS-04', image: vaishnavamImg, title: 'Vaishnavam', guru: 'Acharya Narayana Sarma', students: 148, price: 11800, status: 'Published', created: '10 Mar 2026' },
  { id: 'CRS-05', image: skaandamImg, title: 'Skaandam', guru: 'Guru Murari Lineage', students: 121, price: 13200, status: 'Published', created: '02 Apr 2026' },
  { id: 'CRS-06', image: sauramImg, title: 'Sauram', guru: 'Acharya Narayana Sarma', students: 96, price: 10900, status: 'Draft', created: '28 Apr 2026' },
  { id: 'CRS-07', image: ashtaLakshmiImg, title: 'Ashta Lakṣmī Vidyā', guru: 'Acharya Narayana Sarma', students: 204, price: 9900, status: 'Published', created: '15 May 2026' },
  { id: 'CRS-08', image: fundamentalsImg, title: 'Fundamentals of Tantra', guru: 'Guru Lineage', students: 287, price: 7800, status: 'Published', created: '01 Jun 2026' },
];

export const classes = [
  { id: 'CLS-2201', course: 'Devi Upasana', title: 'Śrāvaṇa Mahālakṣmī Ārādhana', duration: '90 min', students: 42, published: true, video: 'Live Session' },
  { id: 'CLS-2202', course: 'Shaivam Darshanam', title: 'Śrī Rudram Chanting Session', duration: '60 min', students: 28, published: true, video: 'Recording' },
  { id: 'CLS-2203', course: 'Rudrābhiṣekam', title: 'Śrāvaṇa Somavāra Abhiṣeka', duration: '75 min', students: 36, published: false, video: 'Recording' },
  { id: 'CLS-2204', course: 'Soubhagya Pradā Pūjā', title: 'Mangala Gaurī Vratam Sādhanā', duration: '60 min', students: 31, published: true, video: 'Live Session' },
  { id: 'CLS-2205', course: 'Sri Vidya Foundation', title: 'Lalitā Sahasranāma Recitation', duration: '80 min', students: 24, published: true, video: 'Recording' },
  { id: 'CLS-2206', course: 'Chandi Vidya', title: 'Durgā Saptaśatī Pārāyaṇa', duration: '90 min', students: 19, published: false, video: 'Live Session' },
];

export const adminEvents = [
  { id: 'EVT-114', image: mahaLakshmiImg, date: '14 Aug 2026', title: 'Mahā Lakṣmī Ārādhana', type: 'Ārādhana', status: 'Upcoming' },
  { id: 'EVT-117', image: sivaAradhanaEventImg, date: '17 Aug 2026', title: 'Śiva Ārādhana & Abhiṣeka', type: 'Abhiṣeka', status: 'Upcoming' },
  { id: 'EVT-118', image: mangalaGauriMainImg, date: '18 Aug 2026', title: 'Mangala Gaurī Vratam', type: 'Vratam', status: 'Upcoming' },
  { id: 'EVT-121', image: mahaImg, date: '21 Aug 2026', title: 'Mahā Lakṣmī Ārādhana', type: 'Pūjā', status: 'Upcoming' },
  { id: 'EVT-123', image: mahakalaImg, date: '23 Aug 2026', title: 'Śrī Mahākāla Abhiṣekam', type: 'Abhiṣeka', status: 'Upcoming' },
  { id: 'EVT-124', image: rudhraImg, date: '24 Aug 2026', title: 'Śrī Rudrābhiṣekam • Somavāra Pūjā', type: 'Abhiṣeka', status: 'Upcoming' },
  { id: 'EVT-125', image: soubhagyaImg, date: '25 Aug 2026', title: 'Śrāvaṇa Maṅgala Gaurī', type: 'Vratam', status: 'Upcoming' },
  { id: 'EVT-125b', image: bhuamaImg, date: '25 Aug 2026', title: 'Śrāvaṇa Bhauma Pradoṣa Ārādhana', type: 'Vratam', status: 'Upcoming' },
  { id: 'EVT-128', image: homaImg, date: '28 Aug 2026', title: 'Mahālakṣmī Ārādhana', type: 'Ārādhana', status: 'Upcoming' },
  { id: 'EVT-098', image: completeChakraImg, date: '05 Jul 2026', title: 'Complete Chakra Workshop', type: 'Workshop', status: 'Completed' },
  { id: 'EVT-087', image: kshipraGanapatiImg, date: '19 Jun 2026', title: 'Kshipra Ganapati Homa', type: 'Homa', status: 'Completed' },
  { id: 'EVT-080', image: dasaMahaVidyasImg, date: '20 Jun 2026', title: 'Dasa Mahā Vidyās Workshop', type: 'Workshop', status: 'Completed' },
  { id: 'EVT-074', image: ayyappaVidyaImg, date: '02 May 2026', title: 'Ayyappa Vidya Deeksha', type: 'Deeksha', status: 'Completed' },
];

export const revenueSummary = {
  totalRevenue: 485600,
  thisMonth: 140500,
  pendingPayments: 21200,
  successfulPayments: 464400,
  pendingCount: 4,
  successfulCount: 142,
};

export const blogPosts = [
  { id: 'BLG-32', title: 'The Grace of Śrāvaṇa — A Month of Devotion', author: 'Acharya Narayana Sarma', date: '02 Aug 2026', status: 'Published' },
  { id: 'BLG-31', title: 'Understanding the Śrī Sūkta', author: 'Acharya Narayana Sarma', date: '18 Jul 2026', status: 'Published' },
  { id: 'BLG-30', title: 'Rudrābhiṣekam — The Sacred Bathing of Śiva', author: 'Guru Murari Lineage', date: '01 Jul 2026', status: 'Published' },
  { id: 'BLG-29', title: 'Mangala Gaurī Vratam — Auspiciousness in Married Life', author: 'Acharya Narayana Sarma', date: '20 Jun 2026', status: 'Draft' },
  { id: 'BLG-28', title: 'Why Tantra is a Sacred Science', author: 'Guru Lineage', date: '05 Jun 2026', status: 'Published' },
  { id: 'BLG-27', title: 'The Ten Mahā Vidyās of the Divine Mother', author: 'Acharya Narayana Sarma', date: '22 May 2026', status: 'Published' },
];

export const spiritualContent = [
  { id: 'SPC-18', title: 'Daily Dhyāna Series — 108 Days of Devotion', author: 'Acharya Narayana Sarma', date: '28 Jul 2026', status: 'Published' },
  { id: 'SPC-17', title: 'Śrāvaṇa Somavāra Special — Rudram Pārāyaṇa', author: 'Guru Agastya Lineage', date: '15 Jul 2026', status: 'Published' },
  { id: 'SPC-16', title: 'Morning Mantra Practice Guide', author: 'Acharya Narayana Sarma', date: '02 Jul 2026', status: 'Published' },
  { id: 'SPC-15', title: 'Śrī Lakṣmī Sahasranāma Stotra', author: 'Acharya Narayana Sarma', date: '20 Jun 2026', status: 'Draft' },
];

export const courseMaterials = [
  { id: 'MAT-41', title: 'Sri Vidya Foundation — Module 4 PDF', course: 'Sri Vidya Foundation', date: '29 Jul 2026', status: 'Published' },
  { id: 'MAT-40', title: 'Chandi Vidya — Saptaśatī Verse Notes', course: 'Chandi Vidya', date: '21 Jul 2026', status: 'Published' },
  { id: 'MAT-39', title: 'Rudrābhiṣekam — Chant Sheet', course: 'Rudrābhiṣekam', date: '10 Jul 2026', status: 'Published' },
  { id: 'MAT-38', title: 'Ashta Lakṣmī — Dhyāna Slokas', course: 'Ashta Lakṣmī Vidyā', date: '28 Jun 2026', status: 'Draft' },
];

export const contentImages = [
  { id: 'IMG-51', name: 'shravana-banner-2026.jpg', type: 'Banner', size: '1.2 MB', date: '08 Aug 2026', status: 'Published' },
  { id: 'IMG-50', name: 'maha-lakshmi-artwork.jpeg', type: 'Event', size: '348 KB', date: '06 Aug 2026', status: 'Published' },
  { id: 'IMG-49', name: 'course-sri-vidya-cover.png', type: 'Course', size: '3.3 MB', date: '30 Jul 2026', status: 'Published' },
  { id: 'IMG-48', name: 'workshop-chakra-hero.png', type: 'Workshop', size: '3.1 MB', date: '22 Jul 2026', status: 'Draft' },
];

export const notifications = {
  announcements: [
    { id: 'NOT-01', title: 'Śrāvaṇa Māsa Schedule Published', body: 'All August Ārādhana, Abhiṣeka and Vratam dates are now live on the Events page.', date: '10 Aug 2026', audience: 'All Students', status: 'Sent' },
    { id: 'NOT-02', title: 'New Course — Sauram Now in Draft', body: 'Sauram course is being reviewed before publication.', date: '08 Aug 2026', audience: 'Admins', status: 'Sent' },
  ],
  student: [
    { id: 'NOT-11', title: 'Welcome to Lakshmi Prasad', body: 'New student enrolled in Sri Vidya Foundation.', date: '10 Aug 2026', audience: 'Lakshmi Prasad', status: 'Sent' },
    { id: 'NOT-12', title: 'Payment Reminder — Raghunath Iyer', body: 'Pending payment of ₹5,400 for Shaivam Darshanam.', date: '09 Aug 2026', audience: 'Raghunath Iyer', status: 'Scheduled' },
  ],
  course: [
    { id: 'NOT-21', title: 'Lalitā Sahasranāma Session Rescheduled', body: 'The 19 August recitation moves to 7:30 PM.', date: '11 Aug 2026', audience: 'Sri Vidya Foundation', status: 'Sent' },
    { id: 'NOT-22', title: 'Chandi Vidya — New Recording Uploaded', body: 'Durgā Saptaśatī Pārāyaṇa recording is available.', date: '07 Aug 2026', audience: 'Chandi Vidya', status: 'Sent' },
  ],
  event: [
    { id: 'NOT-31', title: 'Mahā Lakṣmī Ārādhana — Register Now', body: 'Registrations open for the 14 August Ārādhana.', date: '11 Aug 2026', audience: 'All Students', status: 'Sent' },
    { id: 'NOT-32', title: 'Rudrābhiṣekam — Slots Filling Fast', body: 'Seats are limited for the 24 August abhiṣeka.', date: '10 Aug 2026', audience: 'All Students', status: 'Sent' },
  ],
};

export const quickActions = [
  { id: 'add-student', label: 'Add Student', icon: 'user' },
  { id: 'create-course', label: 'Create Course', icon: 'book' },
  { id: 'upload-video', label: 'Upload Video', icon: 'video' },
  { id: 'add-event', label: 'Add Event', icon: 'calendar' },
  { id: 'announcement', label: 'Create Announcement', icon: 'megaphone' },
];

export const adminNavItems = [
  { to: '/admin', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/admin/students', label: 'Students', icon: 'users' },
  { to: '/admin/courses', label: 'Courses', icon: 'book' },
  { to: '/admin/classes', label: 'Classes & Videos', icon: 'play' },
  { to: '/admin/events', label: 'Events', icon: 'calendar' },
  { to: '/admin/payments', label: 'Payments & Revenue', icon: 'wallet' },
  { to: '/admin/content', label: 'Content', icon: 'file' },
  { to: '/admin/notifications', label: 'Notifications', icon: 'bell' },
  { to: '/admin/profile', label: 'Admin Profile', icon: 'userCircle' },
  { to: '/admin/settings', label: 'Settings', icon: 'settings' },
];
