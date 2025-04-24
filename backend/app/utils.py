# backend/app/utils.py
def generate_fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    if n < 1:
        return []
    elif n == 1:
        return [0]

    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

def calculate_golden_ratio(n):
    """Calculate golden ratio approximations using Fibonacci numbers."""
    sequence = generate_fibonacci(n)
    ratios = []
    for i in range(2, len(sequence)):
        ratio = sequence[i] / sequence[i-1]
        ratios.append(round(ratio, 6))
    return ratios