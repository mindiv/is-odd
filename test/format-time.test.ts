import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { formatTime } from '../src';

describe('formatTime', () => {
  const mockNow = new Date('2024-05-26T12:00:00Z');

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockNow);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('seconds ago', () => {
    it('should return "1s ago" for 1 second ago', () => {
      const date = new Date(mockNow.getTime() - 1000);
      expect(formatTime(date)).toBe('1s ago');
    });

    it('should return "30s ago" for 30 seconds ago', () => {
      const date = new Date(mockNow.getTime() - 30 * 1000);
      expect(formatTime(date)).toBe('30s ago');
    });

    it('should return "59s ago" for 59 seconds ago', () => {
      const date = new Date(mockNow.getTime() - 59 * 1000);
      expect(formatTime(date)).toBe('59s ago');
    });
  });

  describe('minutes ago', () => {
    it('should return "1m ago" for 1 minute ago', () => {
      const date = new Date(mockNow.getTime() - 60 * 1000);
      expect(formatTime(date)).toBe('1m ago');
    });

    it('should return "30m ago" for 30 minutes ago', () => {
      const date = new Date(mockNow.getTime() - 30 * 60 * 1000);
      expect(formatTime(date)).toBe('30m ago');
    });

    it('should return "59m ago" for 59 minutes ago', () => {
      const date = new Date(mockNow.getTime() - 59 * 60 * 1000);
      expect(formatTime(date)).toBe('59m ago');
    });
  });

  describe('hours ago', () => {
    it('should return "1h ago" for 1 hour ago', () => {
      const date = new Date(mockNow.getTime() - 60 * 60 * 1000);
      expect(formatTime(date)).toBe('1h ago');
    });

    it('should return "12h ago" for 12 hours ago', () => {
      const date = new Date(mockNow.getTime() - 12 * 60 * 60 * 1000);
      expect(formatTime(date)).toBe('12h ago');
    });

    it('should return "23h ago" for 23 hours ago', () => {
      const date = new Date(mockNow.getTime() - 23 * 60 * 60 * 1000);
      expect(formatTime(date)).toBe('23h ago');
    });
  });

  describe('days ago', () => {
    it('should return "1d ago" for 1 day ago', () => {
      const date = new Date(mockNow.getTime() - 24 * 60 * 60 * 1000);
      expect(formatTime(date)).toBe('1d ago');
    });

    it('should return "3d ago" for 3 days ago', () => {
      const date = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000);
      expect(formatTime(date)).toBe('3d ago');
    });

    it('should return "6d ago" for 6 days ago', () => {
      const date = new Date(mockNow.getTime() - 6 * 24 * 60 * 60 * 1000);
      expect(formatTime(date)).toBe('6d ago');
    });
  });

  describe('date formats (7+ days ago)', () => {
    it('should return "05-19" for 1 week ago (same year)', () => {
      const date = new Date('2024-05-19T12:00:00Z');
      expect(formatTime(date)).toBe('05-19');
    });

    it('should return "04-26" for 1 month ago (same year)', () => {
      const date = new Date('2024-04-26T12:00:00Z');
      expect(formatTime(date)).toBe('04-26');
    });

    it('should return "01-01" for January 1st (same year)', () => {
      const date = new Date('2024-01-01T12:00:00Z');
      expect(formatTime(date)).toBe('01-01');
    });

    it('should return "05-26-2023" for 1 year ago (different year)', () => {
      const date = new Date('2023-05-26T12:00:00Z');
      expect(formatTime(date)).toBe('05-26-2023');
    });

    it('should return "12-25-2022" for December 2022 (different year)', () => {
      const date = new Date('2022-12-25T12:00:00Z');
      expect(formatTime(date)).toBe('12-25-2022');
    });
  });

  describe('input types', () => {
    it('should handle Date objects', () => {
      const date = new Date(mockNow.getTime() - 5 * 60 * 1000);
      expect(formatTime(date)).toBe('5m ago');
    });

    it('should handle ISO date strings', () => {
      const date = '2024-05-26T11:55:00Z';
      expect(formatTime(date)).toBe('5m ago');
    });

    it('should handle timestamps', () => {
      const date = mockNow.getTime() - 5 * 60 * 1000;
      expect(formatTime(date)).toBe('5m ago');
    });
  });

  describe('custom reference date', () => {
    it('should use custom reference date when provided', () => {
      const targetDate = new Date('2024-05-26T11:55:00Z');
      const referenceDate = new Date('2024-05-26T12:00:00Z');
      expect(formatTime(targetDate, referenceDate)).toBe('5m ago');
    });

    it('should handle different reference date for date formatting', () => {
      const targetDate = new Date('2024-04-01T12:00:00Z');
      const referenceDate = new Date('2024-05-26T12:00:00Z');
      expect(formatTime(targetDate, referenceDate)).toBe('04-01');
    });
  });

  describe('edge cases', () => {
    it('should handle exactly 0 seconds difference', () => {
      expect(formatTime(mockNow, mockNow)).toBe('1s ago');
    });

    it('should handle exactly 1 minute', () => {
      const date = new Date(mockNow.getTime() - 60 * 1000);
      expect(formatTime(date)).toBe('1m ago');
    });

    it('should handle exactly 1 hour', () => {
      const date = new Date(mockNow.getTime() - 60 * 60 * 1000);
      expect(formatTime(date)).toBe('1h ago');
    });

    it('should handle exactly 1 day', () => {
      const date = new Date(mockNow.getTime() - 24 * 60 * 60 * 1000);
      expect(formatTime(date)).toBe('1d ago');
    });

    it('should handle exactly 7 days', () => {
      const date = new Date('2024-05-19T12:00:00Z');
      expect(formatTime(date)).toBe('05-19');
    });
  });

  describe('error handling', () => {
    it('should throw error for invalid date input', () => {
      expect(() => formatTime('invalid-date')).toThrow('Invalid date provided');
    });

    it('should throw error for invalid reference date', () => {
      const validDate = new Date();
      expect(() => formatTime(validDate, 'invalid-date')).toThrow(
        'Invalid date provided'
      );
    });

    it('should throw error for NaN date', () => {
      expect(() => formatTime(new Date(NaN))).toThrow('Invalid date provided');
    });
  });

  describe('date formatting edge cases', () => {
    it('should properly pad single-digit months and days', () => {
      const date = new Date('2024-01-05T12:00:00Z');
      expect(formatTime(date)).toBe('01-05');
    });

    it('should handle leap years correctly', () => {
      const date = new Date('2024-02-29T12:00:00Z');
      expect(formatTime(date)).toBe('02-29');
    });

    it('should handle year boundaries correctly', () => {
      vi.setSystemTime(new Date('2025-01-15T12:00:00Z'));
      const date = new Date('2024-12-31T12:00:00Z');
      expect(formatTime(date)).toBe('12-31-2024');
    });
  });
});
