// Diagnostic script: Test duplicate insert to find UNIQUE constraint
// Run: node test-duplicate.mjs

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tphwjwyvuqnkycvblbld.supabase.co',
  'sb_publishable_Lrq40Lsy9DOPkSZjsPgW9Q_rznTrl1F'
);

const testData = {
  name: '__DUPLICATE_TEST__',
  phone: '0000000000',
  email: 'duplicate-test@test.com',
  message: 'Testing duplicate constraint - safe to delete',
};

console.log('=== Step 1: First insert ===');
const { data: d1, error: e1 } = await supabase.from('inquiries').insert([testData]).select();
if (e1) {
  console.error('FIRST insert FAILED:', JSON.stringify(e1, null, 2));
  process.exit(1);
}
console.log('First insert OK:', JSON.stringify(d1, null, 2));

console.log('\n=== Step 2: Duplicate insert (same data) ===');
const { data: d2, error: e2 } = await supabase.from('inquiries').insert([testData]).select();
if (e2) {
  console.error('DUPLICATE insert FAILED — UNIQUE constraint found!');
  console.error('Error code:', e2.code);
  console.error('Error message:', e2.message);
  console.error('Error details:', e2.details);
  console.error('Full error:', JSON.stringify(e2, null, 2));
} else {
  console.log('Duplicate insert OK:', JSON.stringify(d2, null, 2));
  console.log('\nNo UNIQUE constraint issue — both inserts succeeded!');
}

console.log('\n=== Step 3: Cleanup ===');
const { error: delErr } = await supabase
  .from('inquiries')
  .delete()
  .eq('name', '__DUPLICATE_TEST__');
if (delErr) {
  console.log('Cleanup note:', delErr.message);
} else {
  console.log('Test rows cleaned up.');
}
