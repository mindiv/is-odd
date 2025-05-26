/**
 * Valid date input types for the formatTime function
 */
type DateInput = Date | string | number;

/**
 * Formats a timestamp into a human-readable relative time string
 * @param date - The date to format. Can be a Date object, ISO string, or timestamp
 * @param now - The reference date to compare against (defaults to current time)
 * @returns Formatted time string (e.g., "2m ago", "1h ago", "04-14", "04-14-2023")
 *
 * @example
 * ```typescript
 * // Basic usage
 * formatTime(new Date(Date.now() - 5 * 60 * 1000)); // "5m ago"
 * formatTime(new Date(Date.now() - 2 * 60 * 60 * 1000)); // "2h ago"
 *
 * // With custom reference date
 * const someDate = new Date('2023-04-14');
 * const referenceDate = new Date('2023-04-15');
 * formatTime(someDate, referenceDate); // "1d ago"
 *
 * // Date formats for older dates
 * formatTime(new Date('2024-04-14')); // "04-14" (if current year is 2024)
 * formatTime(new Date('2023-04-14')); // "04-14-2023" (if current year is 2024)
 * ```
 */
function formatTime(date: DateInput, now: DateInput = new Date()): string {
  // Convert inputs to Date objects
  const targetDate = new Date(date);
  const currentDate = new Date(now);

  // Validate dates
  if (isNaN(targetDate.getTime()) || isNaN(currentDate.getTime())) {
    throw new Error('Invalid date provided');
  }

  const diffMs = currentDate.getTime() - targetDate.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  // Less than 1 minute ago
  if (diffSeconds < 60) {
    return diffSeconds <= 1 ? '1s ago' : `${diffSeconds}s ago`;
  }

  // Less than 1 hour ago
  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  }

  // Less than 1 day ago
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  // Less than 7 days ago
  if (diffDays < 7) {
    return `${diffDays}d ago`;
  }

  // 7 days or more - use date format
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const day = String(targetDate.getDate()).padStart(2, '0');
  const year = targetDate.getFullYear();
  const currentYear = currentDate.getFullYear();

  // Same year - just month-day
  if (year === currentYear) {
    return `${month}-${day}`;
  }

  // Different year - include year
  return `${month}-${day}-${year}`;
}

export default formatTime;
export { formatTime, type DateInput };
