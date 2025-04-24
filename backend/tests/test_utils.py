# backend/tests/test_utils.py
import unittest
from app.utils import generate_fibonacci, calculate_golden_ratio

class TestFibonacciUtils(unittest.TestCase):
    def test_generate_fibonacci(self):
        self.assertEqual(generate_fibonacci(5), [0, 1, 1, 2, 3])
        self.assertEqual(generate_fibonacci(1), [0])
        self.assertEqual(generate_fibonacci(0), [])

    def test_calculate_golden_ratio(self):
        ratios = calculate_golden_ratio(10)
        self.assertAlmostEqual(ratios[-1], 1.618034, places=6)

