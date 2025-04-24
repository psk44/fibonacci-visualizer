# backend/app/routes.py
from flask import Blueprint, jsonify, request
from app.utils import generate_fibonacci, calculate_golden_ratio

main = Blueprint('main', __name__)

@main.route('/api/fibonacci')
def get_fibonacci():
    try:
        n = int(request.args.get('n', 10))
        if n < 1 or n > 100:
            return jsonify({'error': 'n must be between 1 and 100'}), 400

        sequence = generate_fibonacci(n)
        ratios = calculate_golden_ratio(n)

        return jsonify({
            'sequence': sequence,
            'ratios': ratios,
            'length': len(sequence)
        })
    except ValueError:
        return jsonify({'error': 'Invalid input'}), 400