import React from 'react';

// Props for all icons
type IconProps = React.SVGProps<SVGSVGElement>;

export const AdminSupportIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 7V3M16 7V3" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13h10" stroke="#a7c9f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 17h6" stroke="#a7c9f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12v5.176C3 19.421 4.79 21 7 21h10c2.21 0 4-1.579 4-3.824V12" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 8.5C21 6.015 19.21 4 17 4H7C4.79 4 3 6.015 3 8.5V12h18V8.5z" stroke="#3b82f6" strokeWidth="1.5"/>
    </svg>
);
export const DigitalMarketingIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17v-4" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 17v-8" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 17v-6" stroke="#d946ef" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 3v15.4C3 19.843 3.828 21 5.2 21h15.6c1.372 0 2.2-1.157 2.2-2.6V3H3z" stroke="#a855f7" strokeWidth="1.5"/>
        <path d="M14 4h7" stroke="#e879f9" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);
export const ECommerceIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="20" r="1" fill="#14b8a6"/>
        <circle cx="18" cy="20" r="1" fill="#14b8a6"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 11H9.92C9.41 11 9 10.59 9 10.08V4.92C9 4.41 9.41 4 9.92 4h6.16C16.59 4 17 4.41 17 4.92v5.16C17 10.59 16.59 11 16 11z" stroke="#5eead4" strokeWidth="1.5"/>
    </svg>
);
export const ResearchAnalysisIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.796 15.811L21 21M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.243 7.257L10.5 10H6" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 10l-1.5 4.5" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const LogoIcon: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2.124a.75.75 0 01.37 1.472l-8.25 2.5a.75.75 0 01-.84-.22l-1.875-2.25a.75.75 0 01.298-1.112l9.82-4.91A.75.75 0 0112.315 2.124zm-.825 6.195a.75.75 0 01.815.659l1.5 9.75a.75.75 0 01-1.455.223l-1.5-9.75a.75.75 0 01.64-1.006zm2.415-3.176a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06L17.19 12l-3.28-3.28a.75.75 0 010-1.06z" clipRule="evenodd" />
    <path d="M5.25 7.5a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V8.25a.75.75 0 01.75-.75z" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.964 2.5-2.25 2.5h-10.5c-1.286 0-2.25-.964-2.25-2.25V6.75m15 7.4-4.25-4.25a.75.75 0 0 0-1.06 0L15 11.25m4.25 2.9-4.25-4.25a.75.75 0 0 0-1.06 0L15 11.25m4.25 2.9-4.25-4.25a.75.75 0 0 0-1.06 0L15 11.25M3 3h18M3 6.75h18" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M12 12.75h.008v.008H12v-.008Zm0 4.5h.008v.008H12v-.008Zm4.5-4.5h.008v.008H16.5v-.008Zm-4.5 0h.008v.008H12v-.008Zm0 4.5h.008v.008H12v-.008Zm-4.5-4.5h.008v.008H7.5v-.008Zm4.5 4.5h.008v.008H12v-.008Z" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

export const CloudIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const QueueListIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>
);

export const RocketLaunchIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.02 12.02 0 00-5.84-2.56m0 0a11.96 11.96 0 01-5.84-2.56m5.84 2.56v4.82" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9.75v-.375c0-3.1-2.5-5.6-5.6-5.6h-1.5c-3.1 0-5.6 2.5-5.6 5.6v.375m12.75 0c.26 0 .5.24.5.5v1.5c0 .28-.24.5-.5.5h-1.5c-.26 0-.5-.22-.5-.5v-1.5c0-.26.24-.5.5-.5h1.5z" />
    </svg>
);

export const ShoppingCartIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-6.835a.375.375 0 00-.33-.51H4.875" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.624l-.219.874-.219-.874a3.375 3.375 0 00-2.455-2.456L13.5 18l.874-.219a3.375 3.375 0 002.456-2.456l.219-.874.219.874a3.375 3.375 0 002.456 2.456l.874.219-.874.219a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 21.1a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);

export const UserGroupIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-12 0m12 0a9.094 9.094 0 01-12 0m12 0v-4.5m-12 4.5v-4.5m12 0a9 9 0 00-12 0m12 0h-1.5m-9.75 0H4.5M12 9a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
);

export const DocumentPlusIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const XMarkIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const PaperClipIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.122 2.122l7.81-7.81" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);
