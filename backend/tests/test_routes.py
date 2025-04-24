# backend/tests/test_routes.py
import unittest
from app import create_app

class TestRoutes(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client()

    def test_fibonacci_endpoint(self):
        response = self.client.get('/api/fibonacci?n=5')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(len(data['sequence']), 5)