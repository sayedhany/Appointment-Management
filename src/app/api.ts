export interface Appointment {
  id: number;
  date: string;
  clientName: string;
  type: string;
  status: string;
}
export const AppointmentList: Appointment[] = [
  {
    id: 1,
    date: '2024-10-15 10:00 AM',
    clientName: 'Sayed Hany',
    type: 'Consultation',
    status: 'Confirmed',
  },

  {
    id: 2,
    date: '2024-10-16 2:00 PM',
    clientName: 'Ahmed Hany',
    type: 'Follow-up',
    status: 'Pending',
  },
  {
    id: 3,
    date: '2024-10-17 11:00 AM',
    clientName: 'Nada Hany',
    type: 'Consultation',
    status: 'Canceled',
  },
  {
    id: 4,
    date: '2024-10-18 10:00 AM',
    clientName: 'Mohammed Hany',
    type: 'Follow-up',
    status: 'Confirmed',
  },
  {
    id: 5,
    date: '2024-10-19 2:00 PM',
    clientName: 'Youssef Hany',
    type: 'Consultation',
    status: 'Pending',
  },
  {
    id: 6,
    date: '2024-10-20 11:00 AM',
    clientName: 'Mahmoud Hany',
    type: 'Follow-up',
    status: 'Canceled',
  },
  {
    id: 7,
    date: '2024-10-21 10:00 AM',
    clientName: 'Abdelrahman Hany',
    type: 'Consultation',
    status: 'Confirmed',
  },
  {
    id: 8,
    date: '2024-10-22 2:00 PM',
    clientName: 'Mohammed Ali',
    type: 'Follow-up',
    status: 'Pending',
  },
  {
    id: 9,
    date: '2024-10-23 11:00 AM',
    clientName: 'Sayed Hany',
    type: 'Consultation',
    status: 'Confirmed',
  },
  {
    id: 10,
    date: '2024-10-24 10:00 AM',
    clientName: 'Ahmed Hany',
    type: 'Follow-up',
    status: 'Pending',
  },
];
