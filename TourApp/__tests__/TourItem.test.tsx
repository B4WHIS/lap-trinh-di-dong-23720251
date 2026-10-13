/// <reference types="jest" />
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TourItem, { Tour } from '../components/TourItem';

describe('Unit Test: TourItem component', () => {
  const mockTour: Tour = {
    id: '1',
    name: 'Đà Lạt mộng mơ cùng Thái Bình',
    city: 'Đà Lạt',
    days: 3,
    price: 3590000,
    seats: 2,
    departure: '2026-11-05',
    image: 'https://example.com/image.jpg',
    isFavorite: false,
  };

  test('compact không hiển thị thành phố, không compact thì có hiển thị', async () => {
    const { queryByText: queryByTextCompact } = await render(
      <TourItem
        tour={mockTour}
        compact={true}
        onPress={jest.fn()}
        onToggleFavorite={jest.fn()}
      />
    );
    expect(queryByTextCompact('Đà Lạt')).toBeNull();

    const { queryByText: queryByTextNormal } = await render(
      <TourItem
        tour={mockTour}
        compact={false}
        onPress={jest.fn()}
        onToggleFavorite={jest.fn()}
      />
    );
    expect(queryByTextNormal('Đà Lạt')).not.toBeNull();
  });

  test('nhấn fav-btn gọi onToggleFavorite(id, true) và onPress không được gọi; nhấn tên tour gọi onPress(tour)', async () => {
    const onPressMock = jest.fn();
    const onToggleFavoriteMock = jest.fn();

    const { getByTestId, getByText } = await render(
      <TourItem
        tour={mockTour}
        compact={false}
        onPress={onPressMock}
        onToggleFavorite={onToggleFavoriteMock}
      />
    );

    fireEvent.press(getByTestId('fav-btn'));
    expect(onToggleFavoriteMock).toHaveBeenCalledTimes(1);
    expect(onToggleFavoriteMock).toHaveBeenCalledWith('1', true);
    expect(onPressMock).not.toHaveBeenCalled();

    fireEvent.press(getByText('Đà Lạt mộng mơ cùng Thái Bình'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
    expect(onPressMock).toHaveBeenCalledWith(mockTour);
  });
});
