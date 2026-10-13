/// <reference types="jest" />
import { groupByCity, formatDate, getSeatLabel, Tour } from '../utils/tour';

describe('Unit Test: tour utils', () => {
  const sampleTours: Tour[] = [
    {
      id: '1',
      name: 'Tour Hà Nội 2',
      city: 'Hà Nội',
      days: 2,
      price: 2000000,
      seats: 5,
      departure: '2026-11-20',
      image: '',
      isFavorite: false,
    },
    {
      id: '2',
      name: 'Tour Đà Lạt 1',
      city: 'Đà Lạt',
      days: 3,
      price: 3000000,
      seats: 2,
      departure: '2026-11-05',
      image: '',
      isFavorite: true,
    },
    {
      id: '3',
      name: 'Tour Đà Lạt 2',
      city: 'Đà Lạt',
      days: 4,
      price: 4000000,
      seats: 0,
      departure: '2026-11-15',
      image: '',
      isFavorite: false,
    },
    {
      id: '4',
      name: 'Tour Hà Nội 1',
      city: 'Hà Nội',
      days: 1,
      price: 1000000,
      seats: 10,
      departure: '2026-11-10',
      image: '',
      isFavorite: false,
    },
    {
      id: '5',
      name: 'Tour Đà Nẵng',
      city: 'Đà Nẵng',
      days: 3,
      price: 3500000,
      seats: 3,
      departure: '2026-11-08',
      image: '',
      isFavorite: false,
    },
  ];

  test('groupByCity: đúng số nhóm, thứ tự A-Z và thứ tự ngày tăng dần', () => {
    const sections = groupByCity(sampleTours);

    expect(sections).toHaveLength(3);

    expect(sections[0].title).toBe('Đà Lạt');
    expect(sections[1].title).toBe('Đà Nẵng');
    expect(sections[2].title).toBe('Hà Nội');

    const daLatTours = sections[0].data;
    expect(daLatTours).toHaveLength(2);
    expect(daLatTours[0].departure).toBe('2026-11-05');
    expect(daLatTours[1].departure).toBe('2026-11-15');

    const haNoiTours = sections[2].data;
    expect(haNoiTours).toHaveLength(2);
    expect(haNoiTours[0].departure).toBe('2026-11-10');
    expect(haNoiTours[1].departure).toBe('2026-11-20');
  });

  test('formatDate: định dạng ngày YYYY-MM-DD sang DD/MM/YYYY', () => {
    expect(formatDate('2026-11-05')).toBe('05/11/2026');
  });

  test('getSeatLabel: kiểm tra các giá trị biên 0, 3, 4', () => {
    expect(getSeatLabel(0)).toBe('Hết chỗ');
    expect(getSeatLabel(3)).toBe('Chỉ còn 3 chỗ');
    expect(getSeatLabel(4)).toBe('Còn 4 chỗ');
  });
});
