import { NextResponse } from 'next/server';
import { CATEGORIES } from '../../../lib/seed-catalog';

export async function GET() {
  return NextResponse.json({
    categories: CATEGORIES,
  });
}
