export type Review = {
  name: string;
  role: string;
  stars: number;
  photo: string;
  text: string;
};

export const LATEST_APK_URL =
  'https://storage.googleapis.com/ppctoda_website/ppctoda_apk/ppctoda_v1.0.28(48).apk';
export const FAST_DOWNLOAD_URL = 'https://ppc-toda.com/download';
export const IOS_APP_URL = 'https://apps.apple.com/us/app/ppc-toda/id6743928831';

export const PRIMARY_SUPPORT_CONTACT = {
  name: 'Jonathan Orbiso',
  phone: '0968 641 0532',
  tel: '09686410532',
  description: 'Primary Support Admin'
} as const;

export const SUPPORT_CONTACTS = [
  { name: 'Miguel Gacho', phone: '0918 910 0445', tel: '09189100445' },
  { name: 'Mike Tindog', phone: '0909 726 1642', tel: '09097261642' },
  { name: 'Mike Tindog', phone: '0994 734 5087', tel: '09947345087' },
  { name: 'Jesus Bisco', phone: '0970 809 2344', tel: '09708092344' },
  { name: 'Rodel Valdez', phone: '0991 272 6375', tel: '09912726375' },
  { name: 'Jing Bacosa', phone: '0910 076 4811', tel: '09100764811' },
  { name: 'Nercielito "Nene"', phone: '0992 027 2940', tel: '09920272940' },
  { name: 'Darwin Donaire', phone: '0993 059 8005', tel: '09930598005' }
] as const;

export const REVIEWS: readonly Review[] = [
  {
    name: 'Faith N.',
    role: 'Passenger',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/faith.jpg',
    text: 'Mabilis, maayos, at user-friendly. Highly recommended ang PPC TODA app!'
  },
  {
    name: 'PhrimeUIUX',
    role: 'Developer',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/phrime.jpg',
    text: 'Astig ah, Basta astig dito guayz try niyo! Supafast, supamura. Tara na sa PPC TODA!'
  },
  {
    name: 'Rovic S.',
    role: 'Passenger',
    stars: 4,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/rovic.jpg',
    text: 'Ang bilis ng serbisyo! Hindi na kailangan maghintay ng matagal, salamat PPC TODA!'
  },
  {
    name: 'Jhouize D.',
    role: 'Passenger',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/jhouize.jpg',
    text: 'Buti na lang may PPC TODA app. Laking ginhawa sa araw-araw na biyahe!'
  },
  {
    name: 'Fherlyn N.',
    role: 'Passenger',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/ferlhyn.jpg',
    text: 'Sobrang convenient gamitin ang PPC TODA app. Isang click lang, may tricycle ka na!'
  },
  {
    name: 'Shayla F.',
    role: 'Passenger',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/shayla.jpg',
    text: 'Very accommodating, very easy to use - mura, mabilis, at walang kuskus balukos.'
  },
  {
    name: 'Max & Bunny',
    role: 'Partner',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/maxbunny.jpg',
    text: 'Araw-araw po namin ginagamit ang PPC TODA para sa Max & Bunny Restaurant.'
  }
];

export const LOOPED_REVIEWS = [...REVIEWS, ...REVIEWS];
