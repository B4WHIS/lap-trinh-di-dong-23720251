import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MovieCard from "../components/MovieCard";

const mockMovie = {
  id: "1",
  title: "Avatar",
  genre: "Hành động",
  year: 2024,
  rating: 8, // test xem có tự đổi thành 8.0 không
  poster: "https://example.com/poster.jpg",
  isShowing: true,
};

describe("MovieCard Component", () => {
  test("Hiển thị đúng tên phim và điểm đánh giá dạng ⭐ 8.0", async () => {
    const { getByText } = await render(
      <MovieCard movie={mockMovie} onSelect={jest.fn()} />,
    );

    expect(getByText("Avatar")).toBeTruthy();
    expect(getByText("⭐ 8.0")).toBeTruthy();
  });
});

test("layout=row hiển thị thể loại, layout=tile không hiển thị thể loại", async () => {
  // 1. Kiểm tra với dạng row
  const rowRender = await render(
    <MovieCard movie={mockMovie} layout="row" onSelect={jest.fn()} />,
  );
  expect(rowRender.getByText(/Hành động/)).toBeTruthy();

  // 2. Kiểm tra với dạng tile (phải trả về null)
  const tileRender = await render(
    <MovieCard movie={mockMovie} layout="tile" onSelect={jest.fn()} />,
  );
  expect(tileRender.queryByText(/Hành động/)).toBeNull();
});

test("isShowing: true hiển thị ✅, isShowing: false hiển thị ❌", async () => {
  // 1. Phim đang chiếu
  const renderActive = await render(
    <MovieCard
      movie={{ ...mockMovie, isShowing: true }}
      onSelect={jest.fn()}
    />,
  );
  expect(renderActive.getByText("✅")).toBeTruthy();

  // 2. Phim ngừng chiếu
  const renderInactive = await render(
    <MovieCard
      movie={{ ...mockMovie, isShowing: false }}
      onSelect={jest.fn()}
    />,
  );
  expect(renderInactive.getByText("❌")).toBeTruthy();
});

test("fireEvent.press gọi hàm onSelect đúng 1 lần với movie.id", async () => {
  const mockOnSelect = jest.fn();
  const { getByText } = await render(
    <MovieCard movie={mockMovie} onSelect={mockOnSelect} />,
  );

  // Kích hoạt sự kiện bấm vào phim
  fireEvent.press(getByText("Avatar"));

  expect(mockOnSelect).toHaveBeenCalledTimes(1);
  expect(mockOnSelect).toHaveBeenCalledWith(mockMovie.id);
});
